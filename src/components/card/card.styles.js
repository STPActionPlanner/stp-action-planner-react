import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  background-color: white;
  border-bottom: 1px solid ${props => props.theme.colors.lightGrey};
  text-align: center;

  &:nth-child(even) {
    background-color: ${props => props.theme.colors.xlightGrey};
  }

  &:last-child {
    border-bottom: none;
  }

  @media only screen and (min-width: 40em) {
    flex-direction: row;
    text-align: left;
    gap: 5rem;
  }
`
export const CardDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
`

export const CardTitleContainer = styled.div`
  width: 100%; 
  display: flex;
  justify-items: space-between;
  align-items: center;
  gap: .75rem;
  flex-direction: column;

  @media only screen and (min-width: 40em) {
    align-items: flex-start;
  }
`

export const CardTitle = styled.h2`
  max-width: 100%;
  margin: 0;
  font-size: 2rem;
  font-weight: 500;
`

export const CardDescription = styled.p`
  margin: 0;
  font-size: 1.6rem;
  font-weight: 400;
`

export const CardTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  @media only screen and (min-width: 40em) {
    justify-content: flex-start;
  }
`

export const CardTag = styled.div`
  height: min-content;
  width: max-content;
  padding: .5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.5rem;
  border: 1px solid ${props => props.theme.colors.blue};
  background-color: ${props => props.theme.colors.lightBlue};
`

export const TagTitle = styled.p`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1;
  color: ${props => props.theme.colors.blue};
  text-transform: capitalize;
`

export const CardActionsContainer = styled.div`
  width: 100%;
  max-width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`