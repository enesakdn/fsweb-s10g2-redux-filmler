import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import favoriReducer from "./favoriReducer";

const rootReducer = combineReducers({
  movie: movieReducer,
  favorites: favoriReducer,
});

export default rootReducer;
