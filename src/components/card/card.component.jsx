import React from 'react'
import CustomButton from '../custom-button/custom-button.component';
import { theme } from '../../theme/theme'


import {
  CardActionsContainer,
  CardContainer,
  CardDescription,
  CardDetailsContainer,
  CardTag,
  CardTagContainer,
  CardTitle,
  CardTitleContainer,
  TagTitle,
} from './card.styles';

const Card = ({
  description,
  handlePrimaryClick,
  handleSecondaryClick,
  primaryBtnState,
  primaryBtnTitle,
  secondaryBtnState,
  secondaryBtnTitle,
  tags,
  title,
  variant,
}) => {
  return (
    <CardContainer>
      <CardDetailsContainer>
        <CardTitleContainer>
          <CardTitle>
            {title}
          </CardTitle>
          <CardTagContainer>
            {
              tags ? (
                tags.map(tag => (
                  <CardTag key={tag}>
                    <TagTitle>{tag}</TagTitle>
                  </CardTag>
                ))
                ) : null
              }
          </CardTagContainer>
        </CardTitleContainer>
        {
          description ? (
            <CardDescription>{description}</CardDescription>
          ) : null
        }
      </CardDetailsContainer>
      <CardActionsContainer>
        <CustomButton 
          toggled={primaryBtnState}
          onClick={handlePrimaryClick}
          primaryBgColor={theme.colors.lightPurple}
          primaryColor={theme.colors.purple}
          secondaryBgColor={theme.colors.xlightGrey}
          secondaryColor={theme.colors.red}
        >
          {primaryBtnTitle}
        </CustomButton>
        {
          variant === 'activity' ? (
            <CustomButton
              toggled={secondaryBtnState}
              onClick={handleSecondaryClick}
              primaryBgColor={theme.colors.lightBlue}
              primaryColor={theme.colors.blue}
              secondaryBgColor={theme.colors.xlightGrey}
              secondaryColor={theme.colors.red}
            >
              {secondaryBtnTitle}
            </CustomButton>
          ) : null
        }
      </CardActionsContainer>
    </CardContainer>
  )
};

export default Card;
