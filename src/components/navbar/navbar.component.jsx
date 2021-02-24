import React, {useContext, useState} from 'react'
import { withRouter } from 'react-router-dom'
import { PlannerContext } from '../../contexts/plannerContext'

import NavbarDropdownItem from '../navbar-dropdown-item/navbar-dropdown-item.component'
import NavbarStepActions from '../navbar-step-actions/navbar-step-actions.components'

import {
  DropdownClose, 
  DropdownContent,
  DropdownHeader,
  DropdownLabel,
  DropdownMarker,
  Logo,
  Nav,
  NavContainer,
  NavItem, 
  NavItemDropdown, 
  NavLink,
  NavList,
} from './navbar.styles'

const initialDropdownState = {goal: false, activity: false};

const Navbar = ({history}) => {
  // Pull methods and data from planner context.
  const { planner, nextStep, prevStep, removeActivity, removeGoal} = useContext(PlannerContext)
  const [showDropdown, setShowDropdown] = useState(initialDropdownState);

  const toggleDropdown = (dropdown) => {
    setShowDropdown({...initialDropdownState, [dropdown]: !showDropdown[dropdown]})
  }

  // Define what url the navigation buttons direct to.
  const handleNav = async (direction) => {
    if (direction === 'next') {
      const newStep = nextStep(planner.step)
      history.replace(`/${newStep}`)
    } else if (direction === 'prev') {
      const newStep = prevStep(planner.step)
      history.replace(`/${newStep}`)
    }
  }

  return (
    <NavContainer>
      <Nav>
        <NavLink to='/' >
          <Logo />  
        </NavLink>
        <NavList>
          <NavItem onClick={() => toggleDropdown('goal')}>
            <DropdownLabel>
              <DropdownMarker>{showDropdown.goal ? "▾" : '▸'} </DropdownMarker>
              Goals ({planner.goals.length})
            </DropdownLabel>
            {
              showDropdown.goal ? (
                <NavItemDropdown>
                  <DropdownHeader>
                    <span>Selected Goals</span>
                    <DropdownClose onClick={() => toggleDropdown('goal')}>&#x02A2F;</DropdownClose>
                  </DropdownHeader>
                  <DropdownContent>
                    {
                      planner.goals.length ? (
                        planner.goals
                          .sort((a,b) => a.name.localeCompare(b.name))
                          .map(goal => (
                            <NavbarDropdownItem label={goal.name} handleClick={() => removeGoal(goal.id)} />
                        ))
                      ) : ('No goals selected')
                    }
                  </DropdownContent>
                </NavItemDropdown>
              ) : null
            }
          </NavItem>
          <NavItem onClick={() => toggleDropdown('activity')}>
            <DropdownLabel>
              <DropdownMarker>{showDropdown.activity ? "▾" : '▸'} </DropdownMarker>
              Activities ({planner.activities.length})
            </DropdownLabel>
            {
              showDropdown.activity ? (
                <NavItemDropdown>
                  <DropdownHeader>
                    <span>Selected Activities</span>
                    <DropdownClose onClick={() => toggleDropdown('activity')}>&#x02A2F;</DropdownClose>
                  </DropdownHeader>
                  <DropdownContent>
                    {
                      planner.activities.length ? (
                        planner.activities
                          .sort((a,b) => a.name.localeCompare(b.name))
                          .map(activity => (
                            <NavbarDropdownItem label={activity.name} handleClick={() => removeActivity(activity.id)} />
                          ))
                      ) : ('No activities selected')
                    }
                  </DropdownContent>
                </NavItemDropdown>
              ) : null
            }
          </NavItem>
        </NavList>
        <NavbarStepActions planner={planner} handleNext={() => handleNav('next')} handlePrev={() => handleNav('prev')} />
      </Nav>
    </NavContainer>
  )
}

export default withRouter(Navbar)
