export const Axis = {
  Horizontal: "horizontal",
  Vertical: "vertical",
} as const;

export type AxisType = (typeof Axis)[keyof typeof Axis];

export const Direction = {
  UP: "up",
  DOWN: "down",
  LEFT: "left",
  RIGHT: "right",
} as const;

export type DirectionType = (typeof Direction)[keyof typeof Direction];
