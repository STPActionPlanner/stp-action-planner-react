import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CustomButtonContainer = styled.button`
  padding: ${props => props.big 
    ? "2rem 6rem" : "1rem 3rem"};
  background-color: ${props => props.disabled 
    ? props.theme.colors.darkGrey : props.toggled
    ? props.primaryBgColor || props.theme.colors.purple 
    : props.secondaryBgColor || props.theme.colors.red
  };
  font-size: ${props => props.big 
    ? "2.2rem"
    : "1.6rem"
  };
  color: ${props => props.disabled 
    ? props.theme.colors.xlightGrey : props.toggled 
    ? props.primaryColor || props.theme.colors.white 
    : props.secondaryColor || props.theme.colors.white
  };
  font-weight: 500;
  border-radius: .5rem;
  border: 1px solid ${props => props.disabled 
    ? props.theme.colors.darkGrey : props.toggled 
    ? props.primaryColor || props.theme.colors.purple 
    : props.secondaryColor || props.theme.colors.red
  };
  cursor: ${props => props.disabled ? "disabled" : "pointer"};
`


export const CustomLinkContainer = styled(Link)`
  padding: ${props => props.big 
    ? "2rem 6rem" : "1rem 3rem"};
  background-color: ${props => props.disabled 
    ? props.theme.colors.darkGrey : props.toggled 
    ? props.primaryBgColor || props.theme.colors.purple 
    : props.secondaryBgColor || props.theme.colors.red
  };
  font-size: ${props => props.big 
    ? "2.2rem"
    : "1.6rem"
  };
  color: ${props => props.disabled
    ? props.theme.colors.xlightGrey : props.toggled 
    ? props.primaryColor || props.theme.colors.white 
    : props.secondaryColor || props.theme.colors.white
  };
  text-align: center;
  font-weight: 500;
  text-decoration: none;
  border-radius: .5rem;
  border: 1px solid ${props => props.disabled 
    ? props.theme.colors.darkGrey : props.toggled 
    ? props.primaryColor || props.theme.colors.purple 
    : props.secondaryColor || props.theme.colors.red
  };
  cursor: ${props => props.disabled ? "disabled" : "pointer"};
`