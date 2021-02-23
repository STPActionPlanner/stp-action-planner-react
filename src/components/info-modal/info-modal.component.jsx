import React from 'react'
import ActivityInfo from '../activity-info/activity-info.component'

import {ModalContainer, PageBlur} from './info-modal.styles'

const InfoModal = ({id, handleClose}) => {
  return (
    <PageBlur>
      <ModalContainer>
        <ActivityInfo id={id} handleClose={handleClose} />
      </ModalContainer>
    </PageBlur>
  )
}

export default InfoModal
