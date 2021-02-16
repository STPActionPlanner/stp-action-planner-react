import React, {useContext} from 'react'

import { PlannerContext } from '../../contexts/plannerContext'

import CustomButton from '../../components/custom-button/custom-button.component'

import {PageContainer, HomeContainer, HomeContent, Button, ActionsContainer, HeadingContainer, HeadingTitle, HeadingSubtitle} from './home.styles'

const HomePage = () => {
  const {clearPlanner, planner: {step, steps}} = useContext(PlannerContext);
  return (
    <PageContainer>
      <HomeContainer>
        <HomeContent>
          <HeadingContainer>
            <HeadingTitle>Welcome to STSWR's School Travel Planning Action Planner.</HeadingTitle>
            <HeadingSubtitle>Select an option below to start</HeadingSubtitle>
          </HeadingContainer>
          <ActionsContainer>
            <Button to={`/${steps[1]}`} onClick={clearPlanner}>Start a new action plan</Button>
            {
              step !== steps[0] ? (
                <Button to={`/${step}`} clear>Resume previous action plan</Button>
              ) : null
            }
          </ActionsContainer>
        </HomeContent>
      </HomeContainer>
    </PageContainer>
  )
}

export default HomePage
