import React from 'react'

import { CustomButtonContainer, CustomLinkContainer } from './custom-button.styles'

const CustomButton = ({
  big,
  disabled,
  toggled,
  children,
  primaryBgColor,
  primaryColor,
  secondaryBgColor,
  secondaryColor,
  onClick,
  to,
}) => {
  if (to) {
    return (
      <CustomLinkContainer 
        to={to}
        onClick={onClick}
        toggled={!toggled}
        big={big}
        primaryColor={primaryColor}
        primaryBgColor={primaryBgColor}
        secondaryBgColor={secondaryBgColor}
        secondaryColor={secondaryColor}
        disabled={disabled}
      >
        {children}
      </CustomLinkContainer>
    )
  } else {
    return (
      <CustomButtonContainer
        onClick={onClick}
        toggled={!toggled}
        big={big}
        primaryColor={primaryColor}
        primaryBgColor={primaryBgColor}
        secondaryBgColor={secondaryBgColor}
        secondaryColor={secondaryColor}
        disabled={disabled}
      >
        {children}
      </CustomButtonContainer>
    )
  }
}

export default CustomButton
