import React, { useContext, useEffect, useState } from 'react'
import { PlannerContext } from '../../contexts/plannerContext'

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
      <table style={{borderSpacing: "50px 0", borderCollapse: "separate", width: "100%"}}>
        <thead style={{backgroundColor: "red"}}>
          <th>Action / Initiative</th>
          <th>Description</th>
          <th>Person Responsible</th>
          <th>Proposed Dates</th>
          <th>Resource or Cost</th>
          <th>Notes / Status</th>
        </thead>
        <tbody>
          {
            plannerOverview.map(goal => (
              <>
                <tr>
                  <td style={{backgroundColor: "blue", textAlign: 'center', padding: "20px"}} colSpan="6">{goal.name}</td>
                </tr>
                {
                  goal.activities.map(activity => (
                    <tr>
                      <td style={{paddingBottom: "30px"}}>{activity.name}</td>
                      <td style={{maxWidth: "300px", paddingBottom: "30px"}}>{activity.activityData.description}</td>
                      <td style={{paddingBottom: "30px"}}>TBD</td>
                      <td style={{paddingBottom: "30px"}}>TBD</td>
                      <td style={{paddingBottom: "30px"}}>TBD</td>
                      <td style={{paddingBottom: "30px"}}>N/A</td>
                    </tr>
                    ))
                  }
              </>
            ))
          }
        </tbody>
      </table>
    </PageContainer>
  )
}

export default PlannerOverview
