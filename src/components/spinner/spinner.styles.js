import styled, {keyframes} from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`

export const SpinnerContainer = styled.div`
  height: 100%;
  min-height: 40rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SpinnerIcon = styled.div`
  animation: ${rotate} 4s linear infinite;
  font-size: 6rem;
`