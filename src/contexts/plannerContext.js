import React, {useEffect, useState, createContext} from 'react'

export const PlannerContext = createContext();

const initialState = {step: '', steps: ['','goal-selection', 'plan-overview'], activities: [], goals: []}

const PlannerContextProvider = ({children}) => {
  const [planner, setPlanner] = useState(initialState);

  // get planner object from Local Storage.
  useEffect(() => {
    const data = localStorage.getItem('planner');
    if (data) {
      setPlanner(JSON.parse(data));
    }
  },[])

  // set local storage.
  useEffect(() => {
    localStorage.setItem('planner', JSON.stringify(planner))
  }, [planner])

  // Planner utility functions.
  const clearPlanner = () => {
    setPlanner({ ...initialState, steps: initialState.steps, step: initialState.steps[1]});
  }

  const updatePlannerStep = (step) => {
    setPlanner({...planner, step})
  }

  // Define next step in the planning process when given current step.
  const nextStep = (currentStep) => {
    const stepIndex = planner.steps.indexOf(currentStep)
    if (stepIndex + 1 < planner.steps.length) {
      const nextStepIndex = stepIndex + 1
      updatePlannerStep(planner.steps[nextStepIndex])
      return planner.steps[nextStepIndex]
    }
    return currentStep;
  }

  // Define prev step in the planning process when given current step.
  const prevStep = (currentStep) => {
    const stepIndex = planner.steps.indexOf(currentStep)
    if (stepIndex - 1 >= 0) {
      const prevStepIndex = stepIndex - 1
      updatePlannerStep(planner.steps[prevStepIndex])
      return planner.steps[prevStepIndex]
    }
    return currentStep
  }

  // Add a goal to the planner.
  const addGoal = (goal) => {
    if (!planner.goals.some(goal => goal.id === goal._id)) {
      setPlanner({
        ...planner,
        goals: [...planner.goals, {id: goal._id, name: goal.name, category: goal.category, goalData: goal}]
      })
      planner.steps.splice(2, 0, `activity-selection/${goal._id}`)
    }
  }

  // Add an activity to the planner.
  const addActivity = (activity, goalId) => {
    if (!planner.activities.some(activity => activity.id === activity._id)) {
      const { name } = planner.goals.find(goal => goal.id === goalId)
      setPlanner({
        ...planner,
        activities: [
          ...planner.activities,
          {
            id: activity._id, 
            name: activity.name,
            activityData: activity,
            goalData: {
              id: goalId,
              name: name,
            }
          }
        ],
      })
    }
  }

  // Remove an activity from the planner.
  const removeActivity = (activityId) => {
    setPlanner({
      ...planner,
      activities: [...planner.activities.filter(activity => activity.id !== activityId)]
    })
  }

  // Remove a goal from the planner.
  const removeGoal = (goalId) => {
    setPlanner({
      ...planner, 
      activities: [...planner.activities.filter(activity => activity.goalData.id !== goalId)],
      goals: [...planner.goals.filter(plannerGoal => plannerGoal.id !== goalId)],
      steps: [...planner.steps.filter(plannerStep => plannerStep.split('/')[1] !== goalId)]
    })
  }

  // Define the context provider and associated data and methods that are included.
  return (
    <PlannerContext.Provider value={{planner, clearPlanner, updatePlannerStep, nextStep, prevStep, addGoal, removeGoal, addActivity, removeActivity}}>
      {children}
    </PlannerContext.Provider>
  )
}

export default PlannerContextProvider
