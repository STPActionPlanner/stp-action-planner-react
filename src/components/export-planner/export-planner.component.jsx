import React, { useState, useEffect, useRef } from 'react'
import { appendSpreadsheet } from '../../utils/sheets.utils'
import { downloadTable } from '../../utils/excel-export.utils'
import { theme } from '../../theme/theme'

import CustomButton from '../custom-button/custom-button.component'

import {
  EPAllInputs,
  EPContainer,
  EPErrorMessage,
  EPFinalizedContainer, 
  EPInput,
  EPInputEmail,
  EPInputGroup,
  EPInputLabel,
} from './export-planner.styles'

const initialUserInfo = {
  name: '',
  school: '',
  email: '',
}

const ExportPlanner = ({plannerOverview, table}) => {
  const firstRender = useRef(true);
  const [userInfo, setUserInfo] = useState(initialUserInfo)
  const [disable, setDisabled] = useState(true);
  const [errors, setErrors] = useState({
    name: false,
    school: false,
    email: false,
  })
  const [completed, setCompleted] = useState(false)

  // Use the return value of validateForm to enable/disable download planner button.
  useEffect(()=> {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    setDisabled(validateForm())
  },[userInfo])

  // A form validation function to check that all inputs are not empty and email is the correct format.
  const validateForm = () => {
    const {name, email, school} = userInfo
    if (name === '') {
      setErrors({...errors, name: true})
      return true
    }

    if (school === '') {
      setErrors({...errors, school: true})
      return true
    }

    const regex = new RegExp('.+\@.+\..+')
    if (!regex.test(email)) {
      setErrors({...errors, email: true})
      return true
    }

    setErrors({name: false, school: false, email: false})
    return false
  }

  const handleChange = (e) => {
    const {name, value } = e.target
    setUserInfo({...userInfo, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let goals = []
    let activities = []
    // Create populate the arrays with all goals and activities on the action planner.
    plannerOverview.forEach(goal => {
      goals.push(goal.name)
      goal.activities.forEach(activity => {
        activities.push(activity.name)
      })
    })

    // destructure info from userInfo state.
    const {name, school, email} = userInfo

    // Send userInfo and planner data to Google Spreadsheet.
    appendSpreadsheet({
      name,
      school,
      email,
      goals: goals.join(', '),
      activities: activities.join(', ')
    })

    // call the downloadTable function and reset the state. 
    downloadTable(table, 'STP_Action_Plan')
    setUserInfo(initialUserInfo)
    setCompleted(true)
  }

  // A function that allows the user to redownload the planner spreadsheet if necessary.
  const redownload = (e) => {
    e.preventDefault()
    downloadTable(table, 'STP_Action_Plan')
  }
  
  // Check if the form has been completed and show appropriate UI (already downloaded or not yet downloaded)
  if (completed) {
    return (
      <EPContainer>
        <EPFinalizedContainer>
          <h2>Action Planner Downloading...</h2>
          <CustomButton onClick={redownload}>Retry Planner Download</CustomButton>
          <CustomButton to="/" primaryBgColor={theme.colors.lightPurple} primaryColor={theme.colors.purple}>Complete Another Action Plan</CustomButton>
        </EPFinalizedContainer>
      </EPContainer>
    )
  }
  if (!completed) {
    return (
      <EPContainer onSubmit={handleSubmit}>
        <EPAllInputs>
          <EPInputGroup>
            <EPInputLabel for="name">
                Name *
            </EPInputLabel>
            <EPInput name="name" onChange={handleChange} value={userInfo.name} minLength="1" />
            <EPErrorMessage>{errors.name ? 'Enter your name.' : ''}</EPErrorMessage>
          </EPInputGroup>
          <EPInputGroup>
            <EPInputLabel for="school">
                School *
            </EPInputLabel>
            <EPInput name="school" onChange={handleChange} value={userInfo.school} minLength="1" />
            <EPErrorMessage>{ errors.school ? 'Enter the name of your school.' : ''}</EPErrorMessage>
          </EPInputGroup>
          <EPInputGroup>
            <EPInputLabel for="email">
                Email *
            </EPInputLabel>
            <EPInputEmail name="email" onChange={handleChange} value={userInfo.email} />
            <EPErrorMessage>{errors.email ? 'Enter a valid email' : ''}</EPErrorMessage>
          </EPInputGroup>
        </EPAllInputs>
          <CustomButton type="submit" disabled={disable}>
              Download Plan
          </CustomButton>
      </EPContainer>
    )
  }

}

export default ExportPlanner