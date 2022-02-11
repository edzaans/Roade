import { createStore, combineReducers, applyMiddleware } from "redux";
// Import Chrome extension
import { composeWithDevTools } from "redux-devtools-extension";

// Import redux thunk
import thunk from "redux-thunk";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  // This containes all reducers
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

// Create initial state
const initialState = {
  userLogin: { userInfo: userInfoFromLocalStorage },
};

// Add middlewrae
const middleware = [thunk];

// Create STORE
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
