import React, { useContext, useEffect, useState } from 'react'
import { gql, useLazyQuery } from '@apollo/client';
import { PlannerContext } from '../../contexts/plannerContext'

import { ActivityListContainer } from './activity-list.styles'

import Card from '../../components/card/card.component'

const GET_ACTIVITIES = gql`
  query allActivity($exArray: [ID!], $category: String) {
    allActivity(where: {_id: {nin: $exArray}, category: {eq: $category}}) {
      _id
      name
      category
      description
      supportTarget
      # tags
      process {
        title
        additionalInfo
      }
    }
  }
` 

const ActivityList = ({goal, infoId, toggleInfo }) => {
  const { planner, addActivity, removeActivity } = useContext(PlannerContext)
  const [getNewList, { loading, error, data }] = useLazyQuery(GET_ACTIVITIES)
  const [oldGoalId, setOldGoalId] = useState(null)
  const [targetList, setTargetList] = useState([])
  const [tagList, setTagList] = useState([])

  useEffect(() => {
    if (goal.id !== oldGoalId) {
      console.log(goal)
      setOldGoalId(goal.id)
      setTargetList(goal.goalData?.supportTarget)
      // setTagList(goal.goalData?.tags)
      const goalActivityList = planner.activities.filter(activity => activity.goalData.id !== goal.id)
      const exArray = goalActivityList.length > 0 ? goalActivityList.map(activity => activity.id) : ['1']
      const goalCategory = goal.category;
      getNewList({variables: {exArray, category: goalCategory}})
    }
  }, [goal, oldGoalId, getNewList, planner.activities])

  if (loading) return <p>Loading...</p>
  if (error) {
    console.log(error)
    return (
      <p>Error...</p>
    )}
  
  console.log(data?.allActivity)
  const filteredActivities = data?.allActivity.filter(activity => {
    if (activity.supportTarget.some(target => targetList.includes(target))) { // && activity.tags.some(tag => tagList.includes(tag)
      console.log("true", activity)
      return activity
    }
    console.log('false', activity)
    return null
  })

  return (
    <ActivityListContainer>
      {
        filteredActivities?.map(activity => {
            const isInPlanner = planner.activities.some(plannerActivity => plannerActivity.id === activity._id)
            return (
            <Card 
              title={activity.name}
              description={activity.description}
              primaryBtnTitle={ !isInPlanner? ("Add Activity") : ("Remove Activity") }
              handlePrimaryClick={() => !isInPlanner ? addActivity(activity, goal.id) : removeActivity(activity._id)}
              secondaryBtnTitle={infoId === activity._id ? "Less Info" : "More Info"}
              handleSecondaryClick={() => toggleInfo(activity._id)}
            />
          )})
      }
    </ActivityListContainer>
  )
}

export default ActivityList
