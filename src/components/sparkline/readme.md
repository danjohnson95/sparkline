# my-component



<!-- Auto Generated Below -->


## Properties

| Property                  | Attribute                   | Description                                                                                                                      | Type      | Default             |
| ------------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | --------- | ------------------- |
| `animated`                | `animated`                  | Whether the sparkline should be animated.                                                                                        | `boolean` | `false`             |
| `animationDelay`          | `animation-delay`           | The delay before the animation takes place.                                                                                      | `number`  | `0`                 |
| `animationDuration`       | `animation-duration`        | The duration of the animation.                                                                                                   | `number`  | `200`               |
| `animationTimingFunction` | `animation-timing-function` | Which timing function to use for the animation.                                                                                  | `string`  | `'linear'`          |
| `cursorColor`             | `cursor-color`              | The colour of the cursor line.                                                                                                   | `string`  | `'rgba(0,0,0,0.5)'` |
| `cursorWidth`             | `cursor-width`              | The width of the cursor line.                                                                                                    | `number`  | `1`                 |
| `data`                    | `data`                      | The data which this sparkline should use.                                                                                        | `string`  | `undefined`         |
| `fillColor`               | `fill-color`                | The colour which should be used for the sparkline fill.                                                                          | `string`  | `'rgba(0,0,0,0)'`   |
| `height`                  | `height`                    | The height of the sparkline, in pixels.                                                                                          | `number`  | `20`                |
| `interactive`             | `interactive`               | Whether the sparkline should be interactive. When enabled, a cursor will appear next to the closest datapoint when hovered over. | `boolean` | `true`              |
| `max`                     | `max`                       | The maximum value the trend should use.                                                                                          | `number`  | `undefined`         |
| `min`                     | `min`                       | The minimum value the trend should use.                                                                                          | `number`  | `0`                 |
| `spotSize`                | `spot-size`                 | The radius of the point which is visible when a datapoint is hovered over.                                                       | `number`  | `5`                 |
| `strokeColor`             | `stroke-color`              | The colour which should be used for the sparkline line.                                                                          | `string`  | `'rgba(0,0,0,1)'`   |
| `strokeWidth`             | `stroke-width`              | The width of the sparkline line, in pixels.                                                                                      | `number`  | `2`                 |
| `width`                   | `width`                     | The width of the sparkline, in pixels.                                                                                           | `number`  | `100`               |


## Events

| Event         | Description | Type               |
| ------------- | ----------- | ------------------ |
| `cursorMoved` |             | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
