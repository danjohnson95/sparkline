![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Sparklines

This is a zero dependency native web-component for generating sparklines.

Sparklines can be used to show a trend of data, as well as allowing your users to drill into specific metrics.

# Getting started

```bash
npm i native-sparkline --save
```

# Example

```html
<dan-sparkline
  width=400
  height=100
  data="10,6,26,37,62,86,89,75,102,150,64,22,50"
  stroke-color="hsl(204, 86%, 53%)"
  stroke-width="3"
  spot-size="3"
  cursor-width=0
  animated=true
></dan-sparkline>
```

# Customisation

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