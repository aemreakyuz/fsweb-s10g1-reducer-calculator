export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const TOTAL_MEMORY = "TOTAL_MEMORY";
export const CHANGE_TOTAL = "CHANGE_TOTAL";
export const CLEAR_MEMORY = "CLEAR_MEMORY";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const changeOperation = (operation) => {
  return { type: CHANGE_OPERATION, payload: operation };
};

export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY };
};

export const totalMemory = () => {
  return { type: TOTAL_MEMORY };
};

export const changeTotal = () => {
  return { type: CHANGE_TOTAL };
};

export const clearMemory = () => {
  return { type: CLEAR_MEMORY };
};
