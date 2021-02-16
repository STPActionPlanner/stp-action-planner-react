import React, {useState} from 'react'

import ExportPlanner from '../export-planner/export-planner.component'

import {Table, TableHeadingContainer, TableHeadingItem, TableBody, TableRowHeading, TableDataRowHeading, TableRowGeneral, TableDataGeneral, TableDataDescription } from './planner-overview-table.styles';

const PlannerOverviewTable = ({plannerOverview}) => {
  const [isExporting, setExporting] = useState(false)

  return (
    <>
    <Table>
        <TableHeadingContainer>
          <TableHeadingItem data-export-style="heading" export={true}>Action / Initiative</TableHeadingItem>
          <TableHeadingItem data-export-style="heading" export={true}>Description</TableHeadingItem>
          <TableHeadingItem data-export-style="heading" export={true}>Process</TableHeadingItem>
          <TableHeadingItem data-export-style="heading" export={isExporting}>Person Responsible</TableHeadingItem>
          <TableHeadingItem data-export-style="heading" export={isExporting}>Proposed Dates</TableHeadingItem>
          <TableHeadingItem data-export-style="heading" export={isExporting}>Resource or Cost</TableHeadingItem>
          <TableHeadingItem data-export-style="heading" export={isExporting}>Notes / Status</TableHeadingItem>
        </TableHeadingContainer>
        <TableBody>
          {
            plannerOverview.map(goal => (
              <>
                <TableRowHeading>
                  <TableDataRowHeading data-export-style="goal-section-heading" style={{bgcolor: "#777",}}>{goal.name}</TableDataRowHeading>
                </TableRowHeading>
                {
                  goal.activities.map(activity => (
                    <TableRowGeneral>
                      <TableDataGeneral data-export-style="goal-row-data" export={true}>{activity.name}</TableDataGeneral>
                      <TableDataDescription data-export-style="goal-row-data-description" >{activity.activityData.description}</TableDataDescription>
                      <TableDataGeneral data-export-style="goal-row-data" export={true}>
                        <ol>
                        {
                        activity.activityData.process ? (
                          activity.activityData.process.map(process => {
                            return (
                              <>
                                <li>{process.title}</li>
                                <ul>
                                  {
                                    process.additionalInfo ? (
                                      process.additionalInfo.map((additionalInfo, index) => {
                                        return <li key={`add-${index}`}>{additionalInfo}</li>
                                      })
                                    ) : null
                                  }
                                </ul>
                              </>
                            )
                          })
                          ) : <p>No Process defined.</p>
                        }
                        </ol>
                      </TableDataGeneral>
                      <TableDataGeneral data-export-style="goal-row-data" export={isExporting}>TBD</TableDataGeneral>
                      <TableDataGeneral data-export-style="goal-row-data" export={isExporting}>TBD</TableDataGeneral>
                      <TableDataGeneral data-export-style="goal-row-data" export={isExporting}>TBD</TableDataGeneral>
                      <TableDataGeneral data-export-style="goal-row-data" export={isExporting}>N/A</TableDataGeneral>
                    </TableRowGeneral>
                    ))
                  }
              </>
            ))
          }
        </TableBody>
      </Table>
      <ExportPlanner plannerOverview={plannerOverview} table={document.getElementsByTagName("table")} />
    </>
  )
}

export default PlannerOverviewTable
