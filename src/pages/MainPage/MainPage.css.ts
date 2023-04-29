import { style } from '@vanilla-extract/css';
import { COLORS } from '../../constants/styles/color';
import { TEXT_STYLES } from '../../constants/styles/textStyle';

export const wrapper = style({
  backgroundColor: COLORS.grayscale.gray1,
  boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.25)',
  paddingBottom: 57,
});

export const DegreeBoxWrapper = style({
  backgroundColor: COLORS.grayscale.gray0,
  ...TEXT_STYLES.headline3,
  borderRadius: 15,
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  maxWidth: 358,
  margin: '-38px auto 0',
  zIndex: 10,
  position: 'relative',
  padding: '25px 16px ',
});

export const feedboxsWrapper = style({
  margin: '25px 16px 0',
});
