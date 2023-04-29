import { style } from '@vanilla-extract/css';
import { globalStyle } from '@vanilla-extract/css';
import { COLORS } from './constants/styles/color';

globalStyle('html, body', {
  margin: 0,
  padding: 0,
  backgroundColor: COLORS.grayscale.gray3,
});

globalStyle('*, *:before, *:after', {
  boxSizing: 'border-box',
});

globalStyle('button', {
  cursor: 'pointer',
});

export const Container = style({
  width: '100%',
  maxWidth: 390,
  margin: '0 auto',
});
