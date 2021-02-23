import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-color: ${props => props.theme.colors.white};
`

export const GoalSelectionContainer = styled.main`
  height: 100%;
  width: 100%;
  max-width: 144rem;
  padding: 1rem;

  @media only screen and (min-width: 48em) {
    border-radius: 1rem;
  }
`

export const GoalSelectionTitleContainer = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  text-align: center;

  @media only screen and (min-width: 40em) {
    text-align: left;
  }
`

export const GoalSelectionTitle = styled.h1`
  font-size: 3rem;
`

export const GoalSelectionSubtitle = styled.p`
  font-size: 1.8rem;
`

export const GoalSelectionHeader = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${props => props.theme.colors.lightGrey};
  border-bottom: 1px solid ${props => props.theme.colors.lightGrey};
  background-color: ${props => props.theme.colors.lightBlue};

  @media only screen and (min-width: 40em) {
    justify-content: space-between;
  }
`

export const HeaderTitle = styled.p`
  font-size: 1.6rem;
  color: ${props => props.theme.colors.darkGrey};
  display: ${props => !props.sm ? "none" : "block"};

  @media only screen and (min-width: 40em) {
    display: ${props => props.sm ? "none" : "block"};
  }
`

export const CardListContainer = styled.div`
  height: 100%;
  width: 100%;
`