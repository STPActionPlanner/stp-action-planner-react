import React from 'react'

import {
  NotifyErrorContainer,
  NotifyErrorDescription,
  NotifyErrorIcon,
  NotifyErrorTitle
} from './notify-error.styles'

const NotifyError = ({error}) => {
  return (
    <NotifyErrorContainer>
      <NotifyErrorIcon>
        &#128679;
      </NotifyErrorIcon>
      <NotifyErrorTitle>
        Oops, something went wrong.
      </NotifyErrorTitle>
      <NotifyErrorDescription>
        {error.message}
      </NotifyErrorDescription>
    </NotifyErrorContainer>
  )
}

export default NotifyError
