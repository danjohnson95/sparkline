/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DanSparkline {
        /**
          * Whether the sparkline should be animated.
         */
        "animated": boolean;
        /**
          * The delay before the animation takes place.
         */
        "animationDelay": number;
        /**
          * The duration of the animation.
         */
        "animationDuration": number;
        /**
          * Which timing function to use for the animation.
          * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function
         */
        "animationTimingFunction": string;
        /**
          * The colour of the cursor line.
         */
        "cursorColor": string;
        /**
          * The width of the cursor line.
         */
        "cursorWidth": number;
        /**
          * The data which this sparkline should use.
         */
        "data": string;
        /**
          * The colour which should be used for the sparkline fill.
         */
        "fillColor": string;
        /**
          * The height of the sparkline, in pixels.
         */
        "height": number;
        /**
          * Whether the sparkline should be interactive. When enabled, a cursor will appear next to the closest datapoint when hovered over.
         */
        "interactive": boolean;
        /**
          * The maximum value the trend should use.
         */
        "max": number;
        /**
          * The minimum value the trend should use.
         */
        "min": number;
        /**
          * The radius of the point which is visible when a datapoint is hovered over.
         */
        "spotSize": number;
        /**
          * The colour which should be used for the sparkline line.
         */
        "strokeColor": string;
        /**
          * The width of the sparkline line, in pixels.
         */
        "strokeWidth": number;
        /**
          * The width of the sparkline, in pixels.
         */
        "width": number;
    }
}
declare global {
    interface HTMLDanSparklineElement extends Components.DanSparkline, HTMLStencilElement {
    }
    var HTMLDanSparklineElement: {
        prototype: HTMLDanSparklineElement;
        new (): HTMLDanSparklineElement;
    };
    interface HTMLElementTagNameMap {
        "dan-sparkline": HTMLDanSparklineElement;
    }
}
declare namespace LocalJSX {
    interface DanSparkline {
        /**
          * Whether the sparkline should be animated.
         */
        "animated"?: boolean;
        /**
          * The delay before the animation takes place.
         */
        "animationDelay"?: number;
        /**
          * The duration of the animation.
         */
        "animationDuration"?: number;
        /**
          * Which timing function to use for the animation.
          * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function
         */
        "animationTimingFunction"?: string;
        /**
          * The colour of the cursor line.
         */
        "cursorColor"?: string;
        /**
          * The width of the cursor line.
         */
        "cursorWidth"?: number;
        /**
          * The data which this sparkline should use.
         */
        "data"?: string;
        /**
          * The colour which should be used for the sparkline fill.
         */
        "fillColor"?: string;
        /**
          * The height of the sparkline, in pixels.
         */
        "height"?: number;
        /**
          * Whether the sparkline should be interactive. When enabled, a cursor will appear next to the closest datapoint when hovered over.
         */
        "interactive"?: boolean;
        /**
          * The maximum value the trend should use.
         */
        "max"?: number;
        /**
          * The minimum value the trend should use.
         */
        "min"?: number;
        "onCursorMoved"?: (event: CustomEvent<any>) => void;
        /**
          * The radius of the point which is visible when a datapoint is hovered over.
         */
        "spotSize"?: number;
        /**
          * The colour which should be used for the sparkline line.
         */
        "strokeColor"?: string;
        /**
          * The width of the sparkline line, in pixels.
         */
        "strokeWidth"?: number;
        /**
          * The width of the sparkline, in pixels.
         */
        "width"?: number;
    }
    interface IntrinsicElements {
        "dan-sparkline": DanSparkline;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "dan-sparkline": LocalJSX.DanSparkline & JSXBase.HTMLAttributes<HTMLDanSparklineElement>;
        }
    }
}
