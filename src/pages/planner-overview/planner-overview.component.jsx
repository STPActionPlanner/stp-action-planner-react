import React, { useContext, useEffect, useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import { PlannerContext } from '../../contexts/plannerContext'

import NotifyError from '../../components/notify-error/notify-error.component'
import PlannerOverviewTable from '../../components/planner-overview-table/planner-overview-table.component';
import Spinner from '../../components/spinner/spinner.component'

import {
  PageContainer,
  PlannerOverviewSubtitle,
  PlannerOverviewTitle,
  PlannerOverviewTitleContainer,
} from './planner-overview.styles'

const GET_CONTENT = gql`
  {
    Content(id: "f12b56dd-2f85-451f-bf8c-9ea90db648c2") {
      popTitle
      popSubtitle
    }
  }
`

const PlannerOverview = () => {
  // Fetch title and subtitle data from database.
  const {loading, error, data} = useQuery(GET_CONTENT);
  
  // Pull planner data from planner context.
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

  // Catch loading and error states and show appropriate component.
  if (loading) return <Spinner />
  if (error) return <NotifyError error={error} />

  return (
    <PageContainer>
      <PlannerOverviewTitleContainer>
        <PlannerOverviewTitle>{data.Content.popTitle}</PlannerOverviewTitle>
        <PlannerOverviewSubtitle>{data.Content.popSubtitle}</PlannerOverviewSubtitle>
      </PlannerOverviewTitleContainer>
     <PlannerOverviewTable plannerOverview={plannerOverview} />
    </PageContainer>
  )
}

export default PlannerOverview
