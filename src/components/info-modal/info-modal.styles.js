import styled from 'styled-components'

export const PageBlur = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0,0,0, 0.80);
`

export const ModalContainer = styled.div`
  width: 95vw;
  height: 95vh;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1000;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 1rem;

  @media only screen and (min-width: 40em) {
    width: 75vw;
    height: 90vh;
  }
`