import styled from '@emotion/styled'


export const StyledBackgroundImage = styled.img`
  position: absolute;
  left: 0;
  height: 100vh;
  z-index: -1;
  width: 100vw;
  object-fit: cover;
  clip-path: polygon(0 0, 100% 0, 100% 75%, 0 75%);
`

export const LeftAlignedDiv = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: calc(100% - 24%);
  margin: 0 12%;
`