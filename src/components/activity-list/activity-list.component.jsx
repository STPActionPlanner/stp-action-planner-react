import React, { useContext, useEffect, useState } from 'react'
import { gql, useLazyQuery} from '@apollo/client'
import { PlannerContext } from '../../contexts/plannerContext'

import Card from '../../components/card/card.component'
import NotifyError from '../notify-error/notify-error.component'
import Spinner from '../spinner/spinner.component'

import {
  ActivityListContainer,
  NoDataIconContainer,
  NoDataSection,
  NoDataTitle,
} from './activity-list.styles'


const GET_ACTIVITIES = gql`
  query allActivity($exArray: [ID!], $category: String) {
    allActivity(where: {_id: {nin: $exArray}, category: {eq: $category}}) {
      _id
      name
      category
      description
      supportTarget
      tags
      process {
        title
        additionalInfo
      }
      SOP
    }
    Content(id: "f12b56dd-2f85-451f-bf8c-9ea90db648c2") {
        tagFilter
      }
  }
`

const ActivityList = ({goal, toggleInfo }) => {
  // Pull planner data and methods from the planner context.
  const { planner, addActivity, removeActivity } = useContext(PlannerContext)

  // Setup query to pull activities and page content from database.
  const [getNewList, { loading, error, data }] = useLazyQuery(GET_ACTIVITIES)

  const [oldGoalId, setOldGoalId] = useState(null)
  const [targetList, setTargetList] = useState([])
  const [tagList, setTagList] = useState([])

  useEffect(() => {
    if (goal.id !== oldGoalId) {
      setOldGoalId(goal.id)
      setTargetList(goal.goalData?.supportTarget)
      setTagList(goal.goalData?.tags)
      const goalActivityList = planner.activities.filter(activity => activity.goalData.id !== goal.id)
      const exArray = goalActivityList.length > 0 ? goalActivityList.map(activity => activity.id) : ['1']
      const goalCategory = goal.category;
      
      // Fetch data from database that doesn't include activities that are already in the activity planner.
      getNewList({variables: {exArray, category: goalCategory}})
    }
  }, [goal, oldGoalId, getNewList, planner.activities])

  // Catch error and loading states and show appropriate component.
  if (loading) return <Spinner />
  if (error) return <NotifyError error={error} />
  
  // Apply support and tag filters to activities.
  const filteredActivities = data?.allActivity.filter(activity => {
    if (data.Content.tagFilter) {
      if (activity.supportTarget.some(target => targetList.includes(target) && activity.tags?.some(tag => tagList.includes(tag)))) {
        return activity
      }
    } else {
      if (activity.supportTarget.some(target => targetList.includes(target))) {
        return activity
      }
    }
    return null
  })

  return (
    <ActivityListContainer>
      {
        filteredActivities?.length > 0 ? (
          filteredActivities.map(activity => {
            const isInPlanner = planner.activities.some(plannerActivity => plannerActivity.id === activity._id)
            return (
            <Card 
              title={activity.name}
              description={activity.description}
              sliderState={ !isInPlanner? false : true }
              handlePrimaryClick={() => !isInPlanner ? addActivity(activity, goal.id) : removeActivity(activity._id)}
              primaryBtnTitle={!isInPlanner ? "Add Activity" : "Remove Activity"}
              primaryBtnState={!isInPlanner ? false : true}
              handleSecondaryClick={() => toggleInfo(activity._id)}
              secondaryBtnTitle="More Info"
              variant="activity"
            />
          )})
        ) : (
          <NoDataSection>
            <NoDataIconContainer>
              &#128679;
            </NoDataIconContainer>
            <NoDataTitle>
              There are no pre-defined activities available to tackle this goal right now. Connect with the School Travel Planning Team at STSWR for help developing an activity to tackle this goal!
            </NoDataTitle>
          </NoDataSection>
        )
        
      }
    </ActivityListContainer>
  )
}

export default ActivityList
