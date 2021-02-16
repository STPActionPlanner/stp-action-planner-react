import styled from 'styled-components';

export const EPContainer = styled.form`
  height: auto;
  width: 100%;
  padding: 3rem;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;

  background-color: grey;
`

export const EPInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
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
  color: red;
  font-size: 1.6rem;
`

export const EPButton = styled.button`
  padding: 1rem 2rem;
  background-color: green;
  font-size: 1.6rem;
  text-transform: uppercase;
  border: none;
  color: #000;
`