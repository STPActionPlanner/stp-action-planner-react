import React, {useContext, useEffect, useState} from 'react'
import { withRouter } from 'react-router-dom'
import { PlannerContext } from '../../contexts/plannerContext'
import { gql, useQuery } from '@apollo/client'

import ActivityList from '../../components/activity-list/activity-list.component'
import InfoModal from '../../components/info-modal/info-modal.component'
import NotifyError from '../../components/notify-error/notify-error.component'
import Spinner from '../../components/spinner/spinner.component'

import {
  ActivityListSection,
  GoalHeading,
  GoalOverviewSection,
  GoalSubheading,
  PageContainer,
} from './activity-selection.styles'

const GET_CONTENT = gql`
  {
    Content(id: "f12b56dd-2f85-451f-bf8c-9ea90db648c2") {
      apTitle,
      apSubtitle
    }
  }
` 

const ActivitySelectionPage = ({location: {pathname}}) => {
  // Fetch page heading content data from database.
  const {loading, error, data } = useQuery(GET_CONTENT);
  
  // Pull planner data from planner context.
  const { planner } = useContext(PlannerContext)

  const [info, setInfo] = useState(false);
  const [infoId, setInfoId] = useState(null);
  const [currentGoal, setCurrentGoal] = useState({})

  // Split the goal id off of the URL
  const goalId = pathname.split('/').pop()
  
  useEffect(() => {
    const goal = planner.goals.find(goal => goal.id === goalId)
    setCurrentGoal(goal)
  },[goalId, planner.goals])

  const toggleInfo = (activityId) => {
      setInfo(true)
      setInfoId(activityId)
  };

  const handleClose = (e) => {
    e.preventDefault();
    setInfo(false);
  }

  // Catch loading and error states and show appropriate component.
  if (loading) return <Spinner />
  if (error) return <NotifyError error={error} />
  
  return (
    <PageContainer>
      <GoalOverviewSection>
        <GoalHeading>{data.Content.apTitle} <b>{currentGoal.name}</b></GoalHeading>
        <GoalSubheading>{data.Content.apSubtitle}</GoalSubheading>
      </GoalOverviewSection>
      <ActivityListSection info={info}>
        <ActivityList goal={currentGoal} toggleInfo={toggleInfo} infoId={infoId} />
      </ActivityListSection>
      {
        info ? (
          <InfoModal id={infoId} handleClose={handleClose} />
        ) : null
      }
    </PageContainer>
  )
}

export default withRouter(ActivitySelectionPage)