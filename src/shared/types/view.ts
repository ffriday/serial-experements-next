export const ColorSet = {
  DARK: "dark",
  LIGHT: "light",
} as const;

export type ColorSetType = (typeof ColorSet)[keyof typeof ColorSet];

export const Transparency = {
  SOLID: "solid",
  TRANSPARENT: "transparent",
} as const;

export type TransparencyType = (typeof Transparency)[keyof typeof Transparency];
