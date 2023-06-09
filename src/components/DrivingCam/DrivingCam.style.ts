import styled from '@emotion/styled';

import { TEXT_STYLES } from '../../constants/styles/textStyle';
import { COLORS } from '../../constants/styles/color';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  > video {
    height: 100vh;
    width: 100vw;
    object-fit: cover;
  }
`;

export const EndDriveButton = styled.button({
  position: 'fixed',
  top: 15,
  left: 22,
  width: 86,
  height: 34,
  border: 'none',
  borderRadius: 13,

  backgroundColor: COLORS.accent,
  color: COLORS.grayscale.gray0,
  fontSize: 15,
  fontWeight: 400,
});

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
    position: 'fixed',
    width: 600,

    left: 20,
    bottom: 25,
  },
});

export const ElapsedTimeWContainer = styled.div({
  position: 'fixed',
  top: 17,
  left: 300,
  width: 93,
  height: 34,
  border: 'none',
  borderRadius: 13,

  backgroundColor: 'rgba(244, 244, 244, 0.5)',
  color: COLORS.grayscale.gray0,
  fontSize: 15,
  lineHeight: '34px',
  fontWeight: 400,
  textAlign: 'center',
});

export const FeedbackDiv = styled.div({
  position: 'fixed',
  top: 60,
  left: 280,
  fontSize: 15,
  color: COLORS.red,
});
