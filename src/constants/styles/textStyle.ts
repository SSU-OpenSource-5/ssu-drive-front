export const TEXT_STYLE_NAME = {
  headline1: 'headline1',
  headline2: 'headline2',
  headline3: 'headline3',
  headline4: 'headline4',
  headline5: 'headline5',
  body1B: 'body1B',
  body1R: 'body1R',
} as const;

export type TextStyleName =
  (typeof TEXT_STYLE_NAME)[keyof typeof TEXT_STYLE_NAME];

interface TextStyle {
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
}

export const TEXT_STYLES: Record<TextStyleName, TextStyle> = {
  [TEXT_STYLE_NAME.headline1]: {
    fontSize: 28,
    fontWeight: 800,
    lineHeight: 34,
  },
  [TEXT_STYLE_NAME.headline2]: {
    fontSize: 24,
    fontWeight: 800,
    lineHeight: 29,
  },
  [TEXT_STYLE_NAME.headline3]: {
    fontSize: 22,
    fontWeight: 800,
    lineHeight: 26,
  },
  [TEXT_STYLE_NAME.headline4]: {
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 22,
  },
  [TEXT_STYLE_NAME.headline5]: {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 19,
  },
  [TEXT_STYLE_NAME.body1B]: {
    fontSize: 15,
    fontWeight: 800,
    lineHeight: 18,
  },
  [TEXT_STYLE_NAME.body1R]: {
    fontSize: 15,
    fontWeight: 400,
    lineHeight: 18,
  },
};
