export const SET_WORLD_DATA = "SET_WORLD_DATA";

export function setWorldData(worldData) {
  console.log("In action:", worldData);
  return {
    type: SET_WORLD_DATA,
    worldData
  };
}

