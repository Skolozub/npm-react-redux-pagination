import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { history } from "../constants/history";
import { paginationReducer } from "../../lib/reducers/pagination-reducer";

export const rootReducer = combineReducers({
  router: connectRouter(history),
  pagination: paginationReducer
});
