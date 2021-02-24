import styled from 'styled-components';

export const EPContainer = styled.form`
  width: 100%;
  padding: 3rem 1rem 5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  background-color: ${props => props.theme.colors.lightBlue};
`

export const EPAllInputs = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  gap: 5rem;
`

export const EPInputGroup = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
  position: relative;
`

export const EPInputLabel = styled.label`
  font-size: 1.4rem;
`

export const EPInput = styled.input.attrs(props => ({
  type: 'text'
}))`
  width: 100%;
  padding: 1rem;
  font-size: 1.6rem;
`
export const EPInputEmail = styled(EPInput).attrs(props => ({
  type: 'email',
}))`
  width: 100%;
  padding: 1rem;
  font-size: 1.6rem;
`

export const EPErrorMessage = styled.p`
  position: absolute;
  bottom: -4rem;
  left: 0;
  color: red;
  font-size: 1.6rem;
`

export const EPActionContainer = styled.div`
  height: 100%;
  width: auto;
  background-color: red;
`

export const EPFinalizedContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 2rem;
`