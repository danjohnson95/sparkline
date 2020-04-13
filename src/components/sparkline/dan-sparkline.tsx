import { Component, Prop, h, Element, Event, EventEmitter } from '@stencil/core';
import { CoordinateCalculator } from '../../utils/CoordinateCalculator';
import { SVGBuilder } from '../../utils/SVGBuilder';

@Component({
  tag: 'dan-sparkline',
  shadow: false,
})
export class Sparkline {
    @Element() el: HTMLElement;

    /**
     * The data which this sparkline should use.
     */
    @Prop() data: string;

    /**
     * The width of the sparkline, in pixels.
     */
    @Prop() width: number = 100;

    /**
     * The height of the sparkline, in pixels.
     */
    @Prop() height: number = 20;

    /**
     * The width of the sparkline line, in pixels.
     */
    @Prop() strokeWidth: number = 2;

    /**
     * The maximum value the trend should use.
     */
    @Prop() max: number;

    /**
     * The minimum value the trend should use.
     */
    @Prop() min: number = 0;

    /**
     * The radius of the point which is visible when a datapoint is hovered over.
     */
    @Prop() spotSize: number = 5;

    /**
     * The colour which should be used for the sparkline line.
     */
    @Prop() strokeColor: string = 'rgba(0,0,0,1)';

    /**
     * The colour which should be used for the sparkline fill.
     */
    @Prop() fillColor: string = 'rgba(0,0,0,0)';

    /**
     * Whether the sparkline should be animated.
     */
    @Prop() animated: boolean = false;

    /**
     * The duration of the animation.
     */
    @Prop() animationDuration: number = 200;

    /**
     * The delay before the animation takes place.
     */
    @Prop() animationDelay: number = 0;

    /**
     * Which timing function to use for the animation.
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function
     */
    @Prop() animationTimingFunction: string = 'linear';

    /**
     * Whether the sparkline should be interactive.
     * When enabled, a cursor will appear next to the closest datapoint when hovered over.
     */
    @Prop() interactive: boolean = true;

    /**
     * The width of the cursor line.
     */
    @Prop() cursorWidth: number = 1;

    /**
     * The colour of the cursor line.
     */
    @Prop() cursorColor: string = 'rgba(0,0,0,0.5)';

    @Event() cursorMoved: EventEmitter;

    protected svg: SVGElement;
    protected _data: {value: number}[] = [];
    protected _values: number[] = [];
    protected _pathCoordinates: string = '';
    protected _datapoints: any[] = [];
    protected coordinateCalculator: CoordinateCalculator;
    protected svgBuilder: SVGBuilder;
    protected activeCursorDatapointIndex?: number;

    protected readonly OFFSET_POSITION = -999;
    protected readonly NAMESPACE_URI = 'http://www.w3.org/2000/svg';
    
    connectedCallback() {
        this._data = this.parseData();
        this._values = this._data.map(data => data.value);

        this.coordinateCalculator = new CoordinateCalculator(
            this.height,
            this.width,
            this.strokeWidth,
            this._values,
            this.max,
            this.min,
        );

        this.svgBuilder = new SVGBuilder(
            this.height,
            this.width,
            this.strokeWidth,
            this.strokeColor,
            this.fillColor,
            this.animated,
            this.spotSize,
            this.cursorWidth,
            this.cursorColor,
            this.animationDuration,
            this.animationTimingFunction
        );
    }

    protected parseData(): {value: number}[] {
        // It can either be a comma-separated string of values, or JSON.
        let data;

        try {
            data = JSON.parse(this.data);
        } catch (err) {
            data = this.data.split(',').map(value => {
                return {value};
            });
        }

        return data;
    }

    protected prepareDatapoints() {
        this._datapoints = [];
        this._pathCoordinates = '';

        // Start the path in the first poisition.
        const {x, y} = this.coordinateCalculator.getCoordinates(this._values[0], 0);
        this._pathCoordinates = `M${x} ${y}`;
      
        this._values.forEach((value, index) => {
            const {x, y} = this.coordinateCalculator.getCoordinates(value, index);

            this._datapoints.push(
                Object.assign({}, this._data[index], {index, x, y})
            );

            this._pathCoordinates += ` L ${x} ${y}`;
        });
    }

    protected mouseMoveHandler(event: MouseEvent, cursor: SVGLineElement, spot: SVGCircleElement): void {
        // Find the closest datapoint to where the mouse is.
        const previousActiveDatapointIndex = this.activeCursorDatapointIndex;
        const closestDataPoint = this._datapoints.find(entry => {
            return entry.x >= event.offsetX;
        });

        if (previousActiveDatapointIndex !== closestDataPoint.index) {
            // The cursor has moved.
            this.activeCursorDatapointIndex = closestDataPoint.index;

            // Move the spot.
            spot.setAttribute('cx', closestDataPoint.x.toString());
            spot.setAttribute('cy', closestDataPoint.y.toString());

            // Move the cursor
            cursor.setAttribute('x1', closestDataPoint.x.toString());
            cursor.setAttribute('x2', closestDataPoint.x.toString());

            this.cursorMoved.emit(closestDataPoint);
        }
    }

    protected mouseOutHandler(cursor: SVGLineElement, spot: SVGCircleElement): void {
        // Reset the cursor and spot back to it's offset location.
        this.activeCursorDatapointIndex = undefined;

        spot.setAttribute('cx', this.OFFSET_POSITION.toString());
        spot.setAttribute('cy', this.OFFSET_POSITION.toString());
        cursor.setAttribute('x1', this.OFFSET_POSITION.toString());
        cursor.setAttribute('x2', this.OFFSET_POSITION.toString());

        this.cursorMoved.emit();
    }

    protected registerInteractiveHandlers(interactionArea: SVGRectElement, cursor: SVGLineElement, spot: SVGCircleElement) {
        interactionArea.addEventListener('mousemove', (event: MouseEvent) => {
            this.mouseMoveHandler(event, cursor, spot);
        });

        interactionArea.addEventListener('mouseleave', () => {
            this.mouseOutHandler(cursor, spot);
        });
    }

    protected init() {
        this.prepareDatapoints();
        const fillCoordinates = `${this._pathCoordinates} V ${this.height} L 0 ${this.height} Z`;

        const line = this.svgBuilder.makeLine(this._pathCoordinates);
        const fill = this.svgBuilder.makeFill(fillCoordinates);

        this.svg.appendChild(line);
        this.svg.appendChild(fill);
        
        if (this.interactive) {
            const interactionArea = this.svgBuilder.makeInteractionArea();
            const cursor = this.svgBuilder.makeCursor();
            const spot = this.svgBuilder.makeSpot();

            this.registerInteractiveHandlers(interactionArea, cursor, spot);

            this.svg.appendChild(interactionArea);
            this.svg.appendChild(spot);
            this.svg.appendChild(cursor);
        }

        if (this.animated) {
            setTimeout(() => {
                line.setAttribute('stroke-dashoffset', '0');
            }, this.animationDelay);
        }
    }

    componentDidLoad() {
        console.dir(this.el);

        this.svg = this.el.querySelector('svg');
        this.init();
    }

    render() {
        console.log('render');

        return (
            <svg
                stroke-width={this.strokeWidth}
                width={this.width}
                height={this.height}
            ></svg>
        )
    }
}
