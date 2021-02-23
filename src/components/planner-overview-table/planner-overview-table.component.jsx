import React, { useState } from 'react'

import ExportPlanner from '../export-planner/export-planner.component'

import {
  Table, 
  TableBody, 
  TableDataDescription,
  TableDataGeneral,
  TableDataRowHeading,
  TableHeadingContainer,
  TableHeadingItem,
  TableRowGeneral,
  TableRowHeading,
} from './planner-overview-table.styles';

const PlannerOverviewTable = ({plannerOverview}) => {
  const [isExporting, setExporting] = useState(false)

  return (
    <>
    <ExportPlanner plannerOverview={plannerOverview} table={document.getElementsByTagName("table")} />
    <Table>
        <TableHeadingContainer>
          <TableHeadingItem data-export-style="heading" export={true} sm>Action / Initiative</TableHeadingItem>
          <TableHeadingItem data-export-style="heading" export={true} md>Description</TableHeadingItem>
          <TableHeadingItem data-export-style="heading" export={true} lg>Process</TableHeadingItem>
          <TableHeadingItem data-export-style="heading" export={isExporting}>Person Responsible</TableHeadingItem>
          <TableHeadingItem data-export-style="heading" export={isExporting}>Proposed Dates</TableHeadingItem>
          <TableHeadingItem data-export-style="heading" export={isExporting}>Resource or Cost</TableHeadingItem>
          <TableHeadingItem data-export-style="heading" export={isExporting}>Notes / Status</TableHeadingItem>
          <TableHeadingItem data-export-style="heading" export={isExporting}>Standard Operating Procedures PDF</TableHeadingItem>
        </TableHeadingContainer>
        <TableBody>
          {
            plannerOverview.map(goal => (
              <>
                <TableRowHeading>
                  <TableDataRowHeading data-export-style="goal-section-heading" sm>{goal.name}</TableDataRowHeading>
                </TableRowHeading>
                {
                  goal.activities.map(activity => (
                    <TableRowGeneral>
                      <TableDataGeneral data-export-style="goal-row-data" export={true} sm>{activity.name}</TableDataGeneral>
                      <TableDataDescription data-export-style="goal-row-data-description" md>{activity.activityData.description ? activity.activityData.description : <p>No description available.</p>}</TableDataDescription>
                      <TableDataGeneral data-export-style="goal-row-process" export={true} lg>
                        <ol>
                        {
                        activity.activityData.process ? (
                          activity.activityData.process.map(process => {
                            return (
                              <>
                                <li>{process.title}</li>
                                  {
                                    process.additionalInfo ? (
                                      <ul>
                                        {
                                          process.additionalInfo.map((additionalInfo, index) => {
                                            return <li key={`add-${index}`}>{additionalInfo}</li>
                                          })
                                        }
                                      </ul>
                                    ) : null
                                  }
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
                      <TableDataGeneral data-export-style="goal-row-data" export={isExporting}>{activity.activityData.SOP}</TableDataGeneral>
                    </TableRowGeneral>
                    ))
                  }
              </>
            ))
          }
        </TableBody>
      </Table>
    </>
  )
}

export default PlannerOverviewTable
