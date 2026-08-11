export const GridSpan = {
  FULL: "full",
  S: "s",
  M: "m",
  L: "l",
} as const;

export type GridSpanType = (typeof GridSpan)[keyof typeof GridSpan];

export const GridItemTag = {
  DIV: "div",
  SECTION: "section",
  ARTICLE: "article",
  FIGURE: "figure",
  HEADER: "header",
  FOOTER: "footer",
  ASIDE: "aside",
} as const;

export type GridItemTagType = (typeof GridItemTag)[keyof typeof GridItemTag];

export const PageGridTag = {
  DIV: "div",
  MAIN: "main",
  ARTICLE: "article",
  SECTION: "section",
} as const;

export type PageGridTagType = (typeof PageGridTag)[keyof typeof PageGridTag];
