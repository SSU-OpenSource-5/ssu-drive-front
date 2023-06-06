import styled from '@emotion/styled';

import { TEXT_STYLES } from '../../constants/styles/textStyle';
import { COLORS } from '../../constants/styles/color';

export const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .bottom-navbar-container {
    max-width: none;
    left: 0;
  }

  @media (orientation: landscape) {
    position: absolute;
    left: 0;
    width: 100vh;

    .bottom-navbar-container {
      top: 0;
      right: 0;
      bottom: auto;
      left: auto;
      width: 57px;
      height: 100%;
      position: fixed;
      max-width: none;
    }

    .MuiBottomNavigation-root {
      flex-direction: column;
      height: 100%;
      align-items: center;
    }
  }
`;

export const CaptureButton = styled.button({
  position: 'absolute',
  bottom: 23,
  left: 22,
  width: '100%',
  height: 60,
  border: 'none',
  borderRadius: 13,
  backgroundColor: COLORS.accent,
  color: COLORS.grayscale.gray0,
  ...TEXT_STYLES.headline2,

  '@media (orientation: landscape)': {
    transform: 'rotate(90deg)',
    transformOrigin: 'top left',
    position: 'fixed',
    top: 0,
    left: 0,
  },
});
