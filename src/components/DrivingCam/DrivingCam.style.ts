import styled from '@emotion/styled';

import { TEXT_STYLES } from '../../constants/styles/textStyle';
import { COLORS } from '../../constants/styles/color';

export const Wrapper = styled.div({
  width: '100%',
  height: '100%',
  position: 'relative',
  padding: 22,
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
});
