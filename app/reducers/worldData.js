import { SET_WORLD_DATA } from '../actions/worldData';

export default function worldData(state = {}, action = {}) {
  console.log(action.type);
  console.log(SET_WORLD_DATA);
  switch (action.type) {
    case SET_WORLD_DATA:
      const { worldData } = action;
      console.log("IN REDUCER", worldData);
      const updatedWorldData = Object.assign({}, state.worldData, worldData);
      console.dir(updatedWorldData);
      return { 
        ...state, 
        worldData: updatedWorldData 
      };
    default:
      return state;
  }
}
