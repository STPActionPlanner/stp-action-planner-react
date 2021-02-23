import styled from 'styled-components'

export const PageContainer = styled.main`
  width: 100%;
  max-width: 144rem;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media only screen and (min-width: 90em) {
    padding: 0;
  }
`

export const PlannerOverviewTitleContainer = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  text-align: center;

  @media only screen and (min-width: 40em) {
    text-align: left;
  }
`

export const PlannerOverviewTitle = styled.h1`
  font-size: 3rem;
`

export const PlannerOverviewSubtitle = styled.p`
  font-size: 1.8rem;
`