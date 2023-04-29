import { style, styleVariants } from '@vanilla-extract/css';
import { TEXT_STYLES } from '../../constants/styles/textStyle';
import { COLORS } from '../../constants/styles/color';

export const boxWrapper = style({
  display: 'flex',
  flexDirection: 'column',
});

export const type = style({
  ...TEXT_STYLES.body1R,
});
export const textWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: '5px',
});
export const degree = style({
  fontSize: '14px',
  color: COLORS.grayscale.gray4,
  fontWeight: 600,
  verticalAlign: 'middle',
  display: 'flex',
  alignItems: 'center',
  gap: 4,
});

export const degreeWrapper = style({});
