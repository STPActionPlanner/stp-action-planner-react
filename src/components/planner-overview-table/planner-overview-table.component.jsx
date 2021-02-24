import React from 'react'

import ExportPlanner from '../export-planner/export-planner.component'

import {
  NoTableDataContainer,
  NoTableDataContent,
  NoTableDataSubtitle,
  NoTableDataTitle,
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
  return (
    <>
    <ExportPlanner plannerOverview={plannerOverview} table={document.getElementsByTagName("table")} />
    {
      plannerOverview.length > 0 ? (
        <Table>
            <TableHeadingContainer>
              <tr data-export-style="heading-row">
                <TableHeadingItem data-export-style="heading" export={true} sm>Action / Initiative</TableHeadingItem>
                <TableHeadingItem data-export-style="heading" export={true} md>Description</TableHeadingItem>
                <TableHeadingItem data-export-style="heading" export={true} lg>Process</TableHeadingItem>
                <TableHeadingItem data-export-style="heading" export={false}>Person Responsible</TableHeadingItem>
                <TableHeadingItem data-export-style="heading" export={false}>Proposed Dates</TableHeadingItem>
                <TableHeadingItem data-export-style="heading" export={false}>Resource or Cost</TableHeadingItem>
                <TableHeadingItem data-export-style="heading" export={false}>Notes / Status</TableHeadingItem>
                <TableHeadingItem data-export-style="heading" export={false}>Standard Operating Procedures PDF</TableHeadingItem>
              </tr>
            </TableHeadingContainer>
            <TableBody>
              {
                plannerOverview.map(goal => (
                  <React.Fragment key={goal.name}>
                    <TableRowHeading>
                      <TableDataRowHeading data-export-style="goal-section-heading" sm>{goal.name}</TableDataRowHeading>
                    </TableRowHeading>
                    {
                      goal.activities.map(activity => (
                        <TableRowGeneral key={activity.name}>
                          <TableDataGeneral data-export-style="goal-row-data" export={true} sm>{activity.name}</TableDataGeneral>
                          <TableDataDescription data-export-style="goal-row-data-description" md>{activity.activityData.description ? activity.activityData.description : <p>No description available.</p>}</TableDataDescription>
                          <TableDataGeneral data-export-style="goal-row-process" export={true} lg>
                            <ol>
                            {
                            activity.activityData.process?.length > 0 ? (
                              activity.activityData.process.map(process => {
                                return (
                                  <React.Fragment key={process.title}>
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
                                  </React.Fragment>
                                )
                              })
                              ) : <p>No Process defined.</p>
                            }
                            </ol>
                          </TableDataGeneral>
                          <TableDataGeneral data-export-style="goal-row-data" export={false}>TBD</TableDataGeneral>
                          <TableDataGeneral data-export-style="goal-row-data" export={false}>TBD</TableDataGeneral>
                          <TableDataGeneral data-export-style="goal-row-data" export={false}>TBD</TableDataGeneral>
                          <TableDataGeneral data-export-style="goal-row-data" export={false}>N/A</TableDataGeneral>
                          <TableDataGeneral data-export-style="goal-row-data" export={false}>{activity.activityData.SOP}</TableDataGeneral>
                        </TableRowGeneral>
                        ))
                      }
                  </React.Fragment>
                ))
              }
            </TableBody>
          </Table>
        ) : (
          <NoTableDataContainer>
            <NoTableDataContent>
              <NoTableDataTitle>Oops!</NoTableDataTitle>
              <NoTableDataSubtitle>Looks like you have not chosen any activities yet! Use the Previous button to navigate back and add goals and/or activities.</NoTableDataSubtitle>
            </NoTableDataContent>
          </NoTableDataContainer>
        )
      }
    </>
  )
}

export default PlannerOverviewTable
