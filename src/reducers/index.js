import pointsReducer from "./points";
import goalReducer from "./goal";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  points: pointsReducer,
  goal: goalReducer,
});

export default allReducers;
