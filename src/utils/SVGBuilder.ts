export class SVGBuilder {
    constructor(
        protected height: number,
        protected width: number,
        protected strokeWidth: number,
        protected strokeColor: string,
        protected fillColor: string,
        protected animated: boolean,
        protected spotSize: number,
        protected cursorWidth: number,
        protected cursorColor: string,
        protected animationDuration: number,
        protected animationTimingFunction: string
    ) {}

    protected readonly OFFSET_POSITION = -999;
    protected readonly NAMESPACE_URI = 'http://www.w3.org/2000/svg';

    /**
     * Creates a generic SVG element
     * @param tag The tag name
     */
    protected createSVGElement(tag: string): SVGElement {
        return document.createElementNS(this.NAMESPACE_URI, tag);
    }

    /**
     * Creates a <path> SVG element
     */
    protected createPathElement(): SVGPathElement {
        return this.createSVGElement('path') as SVGPathElement;
    }

    /**
     * Creates a <circle> SVG element
     */
    protected createCircleElement(): SVGCircleElement {
        return this.createSVGElement('circle') as SVGCircleElement;
    }

    /**
     * Creates a <rect> SVG element
     */
    protected createRectangleElement(): SVGRectElement {
        return this.createSVGElement('rect') as SVGRectElement;
    }

    /**
     * Creates a <line> SVG element
     */
    protected createLineElement(): SVGLineElement {
        return this.createSVGElement('line') as SVGLineElement;
    }

    /**
     * Creates the path element for the sparkline.
     * @param coordinates 
     */
    public makeLine(coordinates: string): SVGPathElement {
        const path = this.createPathElement();

        path.setAttribute('d', coordinates);
        path.setAttribute('stroke', this.strokeColor);
        path.setAttribute('fill', 'none');

        // If it's animated, we need to get the length of the line.
        if (this.animated) {
            const length = path.getTotalLength();

            path.setAttribute('stroke-dasharray', length.toString());
            path.setAttribute('stroke-dashoffset', length.toString());

            path.style.transition = `stroke-dashoffset ${this.animationDuration}ms ${this.animationTimingFunction}`;
        }

        return path;
    }

    /**
     * Creates the fill element for the sparkline.
     * @param coordinates 
     */
    public makeFill(coordinates: string): SVGPathElement {
        const fill = this.createPathElement();
        fill.setAttribute('d', coordinates);
        fill.setAttribute('stroke', 'none');
        fill.setAttribute('fill', this.fillColor);

        return fill;
    }

    /**
     * Creates the interaction element for the sparkline.
     */
    public makeInteractionArea(): SVGRectElement {
        const interactionArea = this.createRectangleElement();
        
        interactionArea.setAttribute('width', this.width.toString());
        interactionArea.setAttribute('height', this.height.toString());
        interactionArea.setAttribute('stroke', 'none');
        interactionArea.style.fill = 'rgba(255,255,255,0)';

        return interactionArea;
    }

    /**
     * Creates the spot element for the sparkline.
     */
    public makeSpot(): SVGCircleElement {
        const circle = this.createCircleElement();

        circle.setAttribute('width', this.spotSize.toString());
        circle.setAttribute('height', this.spotSize.toString());
        circle.setAttribute('fill', this.strokeColor.toString());
        circle.setAttribute('cx', this.OFFSET_POSITION.toString());
        circle.setAttribute('cy', this.OFFSET_POSITION.toString());
        circle.setAttribute('r', this.spotSize.toString());

        return circle;
    }

    /**
     * Creates the cursor element for the sparkline.
     */
    public makeCursor(): SVGLineElement {
        const cursor = this.createLineElement();

        cursor.setAttribute('x1', this.OFFSET_POSITION.toString());
        cursor.setAttribute('x2', this.OFFSET_POSITION.toString());
        cursor.setAttribute('y1', '0');
        cursor.setAttribute('y2', this.height.toString());
        cursor.setAttribute('stroke-width', this.cursorWidth.toString());
        cursor.setAttribute('stroke', this.cursorColor);

        return cursor;
    }
}