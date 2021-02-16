import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const PageContainer = styled.div`
  height: calc(100vh - 8rem);
  width: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: center;
  
  @media only screen and (min-width: 48em) {
    padding: 1rem;
  }
`

export const HomeContainer = styled.main`
  height: 100%;
  width: 100%;
  max-width: 144rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeadingContainer = styled.div`
  max-width: 40rem;
  margin-bottom: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const HeadingTitle = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  font-weight: 600;
`

export const HeadingSubtitle = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
`

export const ActionsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Button = styled(Link)`
  padding: 2rem 4rem;
  
  background-color: ${props => props.clear ? 'transparent' : '#079398'};
  border-radius: .5rem;
  color: ${props => props.clear ? '#000' : '#fff'};
  font-size: 1.6rem;
  font-weight: 400;
  text-decoration: none;
  text-align: center;

  &:active {
    background-color: ${props => props.clear ? 'transparent' : '#007079'};
  }
`