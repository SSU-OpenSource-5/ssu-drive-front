import { style } from '@vanilla-extract/css';
import { TEXT_STYLES } from '../../../constants/styles/textStyle';
import { COLORS } from '../../../constants/styles/color';

export const Wrapper = style({
  display: 'flex',
  flexWrap: 'nowrap',
  overflowX: 'scroll',
  overflowY: 'hidden',
});
