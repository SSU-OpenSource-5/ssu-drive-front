import { style, styleVariants } from '@vanilla-extract/css';
import { TEXT_STYLES } from '../../constants/styles/textStyle';
import { COLORS } from '../../constants/styles/color';

export const wrapper = style({
  marginBottom: 18,
});

export const feedbackDateText = style({
  color: COLORS.grayscale.gray4,
  ...TEXT_STYLES.body1R,
  marginBottom: 4,
});

export const boxWrapper = style({
  position: 'relative',
  backgroundColor: COLORS.grayscale.gray0,
  borderRadius: 15,
  padding: '17px 23px',
});

export const thumbIcon = style({
  marginRight: 8,
  position: 'absolute',
});

export const arrowUpIcon = style({
  position: 'absolute',
  right: 23,
});

export const arrowDownIcon = style([
  arrowUpIcon,
  {
    transform: 'rotate(180deg)',
  },
]);

export const contentWrap = style({
  margin: '0 32px',
  maxWidth: 244,
  color: COLORS.grayscale.black,
  ...TEXT_STYLES.body1R,
});

export const closedContentWrap = style([
  contentWrap,
  {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
]);
