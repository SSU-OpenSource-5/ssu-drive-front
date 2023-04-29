import { style } from '@vanilla-extract/css';
import { COLORS } from '../../constants/styles/color';

export const wrapper = style({
  backgroundColor: COLORS.grayscale.gray1,
  boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.25)',
  paddingBottom: 57,
});

export const driveDegreeBox = style({
  backgroundColor: COLORS.grayscale.gray0,
  borderRadius: 15,
  maxWidth: 358,
  height: 253,
  margin: '-38px auto 0',
  zIndex: 10,
  position: 'relative',
});

export const feedboxsWrapper = style({
  margin: '25px 16px 0',
});
