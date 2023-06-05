import styled from '@emotion/styled';

export const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;

  @media (orientation: portrait) {
    transform: rotate(-90deg);
    transform-origin: top left;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100vh;
    height: 100vw;

    .bottom-navbar-container {
      max-width: none;
    }

    .bottom-navbar-container svg {
      transform: rotate(90deg);
    }
  }
`;
