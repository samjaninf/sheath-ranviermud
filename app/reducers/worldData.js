import { SET_WORLD_DATA } from '../actions/worldData';

export default function worldData(state = {}, action = {}) {
  switch (action.type) {
    case SET_WORLD_DATA:
      const { worldData } = action;
      return { ...state, worldData };
    default:
      return state;
  }
}
