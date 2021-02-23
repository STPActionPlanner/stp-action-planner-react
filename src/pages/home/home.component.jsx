import React, {useContext} from 'react'
import {gql, useQuery} from '@apollo/client'
import { PlannerContext } from '../../contexts/plannerContext'

import CustomButton from '../../components/custom-button/custom-button.component'
import NotifyError from '../../components/notify-error/notify-error.component'
import Spinner from '../../components/spinner/spinner.component'

import {
  ActionsContainer,
  HeadingContainer,
  HeadingSubtitle,
  HeadingTitle,
  HomeContainer,
  HomeContent,
  PageContainer,
} from './home.styles'

const GET_CONTENT = gql`
  {
    Content(id: "f12b56dd-2f85-451f-bf8c-9ea90db648c2") {
      hpTitle
      hpSubtitle
    }
  }
`

const HomePage = () => {
  // Pull methods and data from the plannerContext.
  const {clearPlanner, planner: {step, steps}} = useContext(PlannerContext);

  // Fetch Homepage Title and Subtitle data from the database (Sanity.io) to display.
  const {loading, error, data} = useQuery(GET_CONTENT);

  // Catch loading and error states and show appropriate component.
  if (loading) return <Spinner />
  if (error) return <NotifyError error={error} />

  return (
    <PageContainer>
      <HomeContainer>
        <HomeContent>
          <HeadingContainer>
            <HeadingTitle>{data.Content.hpTitle}</HeadingTitle>
            <HeadingSubtitle>{data.Content.hpSubtitle}</HeadingSubtitle>
          </HeadingContainer>
          <ActionsContainer>
            <CustomButton to={`/${steps[1]}`} onClick={clearPlanner} big>Start a new action plan</CustomButton>
            {
              step !== steps[0] ? (
                <CustomButton to={`/${step}`} primaryBgColor="transparent" primaryColor="#000">Resume previous action plan</CustomButton>
              ) : null
            }
          </ActionsContainer>
        </HomeContent>
      </HomeContainer>
    </PageContainer>
  )
}

export default HomePage
