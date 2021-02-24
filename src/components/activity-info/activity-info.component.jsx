import React, { useEffect, useState } from 'react'
import { gql, useQuery } from '@apollo/client';
import { AiOutlineCloseCircle } from 'react-icons/ai'

import ActivityInfoTab from '../activity-info-tab/activity-info-tab.component';
import NotifyError from '../notify-error/notify-error.component';
import Spinner from '../spinner/spinner.component';

import {
  ActivityInfoContainer,
  ActivitySection,
  ActivityTargetContainer,
  ActivityTargetItem,
  ActivityTargetItemContainer,
  ActivityTargetTitle,
  ActivityTitle,
  CloseButton,
} from './activity-info.styles'


const GET_ACTIVITY = gql`
  query Activity($id: ID!) {
    Activity(id: $id) {
      name
      category
      supportTarget
      description
      purpose
      definitions {
        title
        value
      }
      process {
        title
        additionalInfo
      }
      resources {
        title
        value
      }
      requiredCommunications
      associatedActivities {
        _id
        name
      }
      availableEquipment
      links {
        title
        value
      }
      safetyAndSuccess
      emergencyProcedures
      expectedResults {
        title
        additionalInfo
      }
    }
  }
`

const ActivityInfo = ({id, handleClose}) => {
  // Setup query to fetch activity info from database.
  const {loading, error, data} = useQuery(GET_ACTIVITY, {variables: {id}});

  // Catch error and loading states and show appropriate components.
  if (loading) return <Spinner />
  if (error) return <NotifyError error={error}/>

  // Set which information will be removed from dropdown sections.
  const titleInfo = ['name', 'description', 'category', '__typename', 'supportTarget', 'expectedResults', 'process'] 
  const nonTitleInfo = Object.keys(data.Activity).reduce((result, currentItem) => {
    if (!titleInfo.includes(currentItem) && data.Activity[currentItem] !== null) {
        result.push(
          {
            title: currentItem,
            data: data.Activity[currentItem],
          }
        )
      }
    return result
  }, []);


  const {supportTarget, name, description, expectedResults, process } = data.Activity;
  // Display available data from the database.
  return (
    <ActivityInfoContainer>
      <CloseButton onClick={handleClose}>
        <AiOutlineCloseCircle />
      </CloseButton>
      <ActivitySection>
        <ActivityTitle>
          {name}
        </ActivityTitle>
        <ActivityTargetContainer>
          <ActivityTargetTitle>Target Audience:</ActivityTargetTitle>
          <ActivityTargetItemContainer>
            {
              supportTarget.map(item => (
                <ActivityTargetItem key={item}>{item}</ActivityTargetItem>
              ))
            }
          </ActivityTargetItemContainer>
      </ActivityTargetContainer>
      </ActivitySection>
          {
            description ? (
              <ActivitySection>
                <h2>Description</h2>
                <p>{description}</p>
              </ActivitySection>
            ) : null
          }
          {
            expectedResults ? (
              <ActivitySection>
                <h2>Expected Results</h2>
                <ol>
                  {
                    expectedResults.map(result => {
                      if (result.additionalInfo) {
                        return (
                          <>
                            <li>{result.title}</li>
                            <ul>
                              {
                                result.additionalInfo.map(additionalResult => <li>{additionalResult}</li>)
                              }
                            </ul>
                          </>
                        )
                      } else {
                        return (
                          <li>{result.title}</li>
                          )
                        }
                      })
                    }
                </ol>
              </ActivitySection>
            ) : null
          }
          {
            process ? (
              <ActivitySection>
                <h2>Process</h2>
                <ol>
                  {
                    process.map(step => {
                      if (step.additionalInfo) {
                        return (
                          <>
                            <li>{step.title}</li>
                            <ul>
                              {
                                step.additionalInfo.map(additionalStep => <li>{additionalStep}</li>)
                              }
                            </ul>
                          </>
                        )
                      } else {
                        return (
                          <li>{step.title}</li>
                        )
                      }
                    })
                  }
                </ol>
              </ActivitySection>
            ) : null
          }
          {
            nonTitleInfo.length > 0 ? (
              <ActivitySection>
                <h2>Additional Information</h2>
                  {
                    nonTitleInfo.map(({title, data}) => (
                      <ActivityInfoTab key={title} title={title} data={data} />
                    ))
                  }
              </ActivitySection>
            ) : null
          }
    </ActivityInfoContainer>
  )
}

export default ActivityInfo