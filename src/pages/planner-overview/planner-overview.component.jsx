import React, { useContext, useEffect, useState } from 'react'
import { PlannerContext } from '../../contexts/plannerContext'

import PlannerOverviewTable from '../../components/planner-overview-table/planner-overview-table.component';

import { PageContainer, GoalList, GoalListItem, ActivityList, ActivityListItem, ActivityDataList, ActivityDataItem } from './planner-overview.styles'

const PlannerOverview = () => {
  const { planner } = useContext(PlannerContext);
  const [plannerOverview, setPlannerOverview] = useState([])

  useEffect(() => {
    const goals = planner.activities.reduce((acc, activity) => {
      if (!acc.some(item => item.id === activity.goalData.id)) {
        acc.push({id: activity.goalData.id, name: activity.goalData.name, activities: [activity]})
        return acc
      } else {
        acc.find(item => item.id === activity.goalData.id).activities.push(activity)
        return acc
      }
    }, [])
    const sortedGoals = goals.sort((a,b) => a.name.localeCompare(b.name))
    setPlannerOverview(sortedGoals)
  }, [planner])

  console.log(plannerOverview)
  return (
    <PageContainer>
      <h1>Your School Travel Plan.</h1>
     <PlannerOverviewTable plannerOverview={plannerOverview} />
    </PageContainer>
  )
}

export default PlannerOverview
