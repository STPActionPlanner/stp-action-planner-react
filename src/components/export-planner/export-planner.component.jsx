import React, { useState, useEffect, useRef } from 'react'
import { appendSpreadsheet } from '../../utils/sheets.utils'
import { downloadTable } from '../../utils/excel-export.utils';

import { EPContainer, EPInputGroup, EPInputLabel, EPInput, EPInputEmail, EPErrorMessage, EPButton } from './export-planner.styles'

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

  useEffect(()=> {
    if (firstRender.current) {
      firstRender.current = false
      return
    }

    setDisabled(validateForm())
  },[userInfo])

  const handleChange = (e) => {
    const {name, value } = e.target
    setUserInfo({...userInfo, [name]: value})
  }

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

  const handleSubmit = (e) => {
    e.preventDefault()
    const {name, school, email} = userInfo
    appendSpreadsheet({
      name,
      school,
      email
    })
    downloadTable(table)
    setUserInfo(initialUserInfo)
    setCompleted(true)
  }
  
  if (completed) {
    return (
      <EPContainer>
        <p>Thanks for completing the action planner.</p>
        <button onClick={downloadTable(table)}>Download Excel</button>
      </EPContainer>
    )
  }
  if (!completed) {
    return (
      <EPContainer onSubmit={handleSubmit}>
        <EPInputGroup>
          <EPInputLabel for="name">
              Name
          </EPInputLabel>
          <EPInput name="name" onChange={handleChange} value={userInfo.name} minLength="1" />
          <EPErrorMessage>{errors.name ? 'Please enter your name.' : ''}</EPErrorMessage>
        </EPInputGroup>
        <EPInputGroup>
          <EPInputLabel for="school">
              School
          </EPInputLabel>
          <EPInput name="school" onChange={handleChange} value={userInfo.school} minLength="1" />
          <EPErrorMessage>{ errors.school ? 'Please enter the name of your school.' : ''}</EPErrorMessage>
        </EPInputGroup>
        <EPInputGroup>
          <EPInputLabel for="email">
              Email
          </EPInputLabel>
          <EPInputEmail name="email" onChange={handleChange} value={userInfo.email} />
          <EPErrorMessage>{errors.email ? 'Please Enter a valid email' : ''}</EPErrorMessage>
        </EPInputGroup>
        <EPButton type="submit" disabled={disable}>
          Download Planner
        </EPButton>
      </EPContainer>
    )
  }

}

export default ExportPlanner

// const regex = new RegExp('.+\@.+\..+')