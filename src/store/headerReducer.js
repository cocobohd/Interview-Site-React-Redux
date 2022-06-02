import { BURGERMENU } from "./types"

const initialState = {
  burgerActive: false
}

export const headerReducer = (state = initialState, action) => {
  switch(action.type) {
    case BURGERMENU:
      return {
        ...state,
        burgerActive: !state.burgerActive
      }
    default:
      return state  
  }
}