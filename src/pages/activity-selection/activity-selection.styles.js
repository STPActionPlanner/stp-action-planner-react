import styled from 'styled-components';

export const PageContainer = styled.main`
  width: 100%;
  max-width: 144rem;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media only screen and (min-width: 90em) {
    padding: 0;
  }
`

export const ActivitySectionTitleContainer = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  text-align: center;

  @media only screen and (min-width: 40em) {
    text-align: left;
  }
`

export const ActivitySectionTitle = styled.h1`
  font-size: 3rem;
`

export const ActivitySectionSubtitle = styled.p`
  font-size: 1.8rem;
`

export const GoalOverviewSection = styled.section`
  width: 100%;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  background-color: ${props => props.theme.colors.lightBlue};
  border-top: 1px solid ${props => props.theme.colors.lightGrey};
  border-bottom: 1px solid ${props => props.theme.colors.lightGrey};

  @media only screen and (min-width: 40em) {
    align-items: flex-start;
    text-align: left;
  }
`

export const GoalHeading = styled.h2`
  margin: 0;
  font-size: 2rem;
  font-weight: 500;
`

export const GoalSubheading = styled.p`
  font-size: 1.6rem;
`

export const GoalTitle = styled.h3`
  margin: 1rem 0 0 0;
  font-size: 3.5rem;
  font-weight: 200;
`

export const ActivityListSection = styled.section`
`