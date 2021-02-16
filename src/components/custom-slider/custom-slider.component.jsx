import React from 'react'
import { SwitchLabel, SwitchInput, SwitchSlider } from './custom-slider.styles'

const CustomSlider = (toggled) => {
  return (
    <SwitchLabel>
      <SwitchInput />
      <SwitchSlider></SwitchSlider>
    </SwitchLabel>
  )
}

export default CustomSlider
