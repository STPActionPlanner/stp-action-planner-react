import styled from 'styled-components';

export const ActivityInfoContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 3rem;
  border-radius: 1rem;
  overflow-y: scroll;
`

export const ActivityTitle = styled.h2`
  font-size: 4rem;
  font-weight: 600;
  margin: 0;
`

export const ActivitySection = styled.section`
  width: 100%;
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;

  & > * {
    margin: 0;
  }

  & > h2 {
    margin-bottom: 1rem;
  }
`

export const ActivityTargetContainer = styled.div`
  height: min-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`

export const ActivityTargetTitle = styled.p`
  margin: 0;
  font-size: 1.4rem;
  font-weight: 400;
`

export const ActivityTargetItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
`

export const ActivityTargetItem = styled.p`
  width: max-content;
  margin: 0;
  padding: .5rem 1rem;
  font-size: 1.4rem;
  color: ${props => props.theme.colors.blue};
  text-transform: capitalize;
  background-color: ${props => props.theme.colors.lightBlue};
  border-radius: 1rem;
`

export const ActivityUnorderedList = styled.ul`
  
`

export const ActivityOrderedList = styled.ol`
  display: ${({toggled}) => toggled ? "none" : "block"};
`

export const ActivityListItem = styled.li`
  font-size: 1.6rem;
  
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 3rem;

  font-size: 3rem;
  border: none;
  background: none;
  cursor: pointer;
`