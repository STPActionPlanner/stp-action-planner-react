import React, { useContext } from 'react'
import { gql, useQuery } from '@apollo/client'
import { PlannerContext } from '../../contexts/plannerContext'

import Card from '../../components/card/card.component';
import NotifyError from '../../components/notify-error/notify-error.component';
import Spinner from '../../components/spinner/spinner.component'

import {
  CardListContainer, 
  GoalSelectionContainer,
  GoalSelectionHeader,
  GoalSelectionSubtitle,
  GoalSelectionTitle,
  GoalSelectionTitleContainer,
  HeaderTitle,
  PageContainer,
} from './goal-selection.styles';

const GET_GOALS = gql`
  {
    allGoal(sort: {name: ASC}) {
      _id
      name
      category
      supportTarget
      tags
    }
    Content(id: "f12b56dd-2f85-451f-bf8c-9ea90db648c2") {
      gpTitle
      gpSubtitle
    }
  }
`

const GoalSelectionPage = () =>  {
  // Fetching available goals from database
  const {loading, error, data } = useQuery(GET_GOALS)

  // Pulling methods and data from planner context.
  const {planner, addGoal, removeGoal} = useContext(PlannerContext)

  // Catching loading and error states and returning appropriate components.
  if (loading) return <Spinner />
  if (error) return <NotifyError error={error} />

  return (
    <PageContainer>
      <GoalSelectionContainer>
        <GoalSelectionTitleContainer>
          <GoalSelectionTitle>{data.Content.gpTitle}</GoalSelectionTitle>
          <GoalSelectionSubtitle>{data.Content.gpSubtitle}</GoalSelectionSubtitle>
        </GoalSelectionTitleContainer>
        <GoalSelectionHeader>
          <HeaderTitle sm>Goal</HeaderTitle>
          <HeaderTitle>Name / Target Audience</HeaderTitle>
          <HeaderTitle>Add/Remove</HeaderTitle>
        </GoalSelectionHeader>
        <CardListContainer>
          {
            data.allGoal.map(goal => {
              const isInPlanner = planner.goals.some(plannerGoal => plannerGoal.id === goal._id);
              return (
              <Card
                key={goal._id}
                title={goal.name}
                tags={goal.supportTarget}
                description={goal.description}
                handlePrimaryClick={() => !isInPlanner ? addGoal(goal) : removeGoal(goal._id)}
                primaryBtnTitle={!isInPlanner ? "Add Goal" : "Remove Goal"}
                primaryBtnState={!isInPlanner ? false : true}
              />
            )})
          }
        </CardListContainer>
      </GoalSelectionContainer>
    </PageContainer>
  )
}

export default GoalSelectionPage;
