import { style } from '@vanilla-extract/css';
import { TEXT_STYLES } from '../../constants/styles/textStyle';
import { COLORS } from '../../constants/styles/color';

export const Wrapper = style({
  width: '100%',
  height: 397,
  padding: '32px 16px',
  backgroundColor: '#FFF6EA',
  position: 'relative',
});

export const Title = style({
  ...TEXT_STYLES.headline1,
  marginTop: 4,
});

export const Image = style({
  position: 'absolute',
  top: 113,
  right: 0,
});

export const Button = style({
  width: 122,
  height: 38,
  backgroundColor: COLORS.accent,
  border: 'none',
  borderRadius: 13,
  color: COLORS.grayscale.gray0,
  ...TEXT_STYLES.body1B,
  position: 'absolute',
  left: 16,
  bottom: 62,
});
