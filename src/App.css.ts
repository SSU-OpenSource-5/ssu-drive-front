import { style } from '@vanilla-extract/css';
import { globalStyle } from '@vanilla-extract/css';
import { COLORS } from './constants/styles/color';

globalStyle('html, body', {
  margin: 0,
  padding: 0,
  backgroundColor: COLORS.grayscale.gray3,
  //overflow: 'hidden',
});

globalStyle('*, *:before, *:after', {
  boxSizing: 'border-box',
});

globalStyle('button', {
  cursor: 'pointer',
});

globalStyle('.bottom-navbar-container', {
  bottom: 0,
  top: 'auto',
  right: 'auto',
  width: '100%',
  height: '57px',
  position: 'fixed',
  maxWidth: '390px',
  margin: '0 auto',
});

export const Container = style({
  width: '100%',
  minHeight: '100vh',
  maxWidth: 390,
  margin: '0 auto',

  '@media': {
    '(orientation:landscape)': {
      maxWidth: 'none',
    },
  },
});
