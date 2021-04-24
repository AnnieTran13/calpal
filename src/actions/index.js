export const setGoal = (data) => {
  return {
    type: "SET_GOAL",
    payload: data,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
