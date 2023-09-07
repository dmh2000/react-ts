import { combineReducers } from "redux";
import reducer from "./reducers";

const reducers = combineReducers({
  repositories: reducer,
});

export default reducers;
