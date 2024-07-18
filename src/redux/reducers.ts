import { combineReducers } from "redux";

import selectedItemSlice from "./slices/selectedItemSlice";

const rootReducer = combineReducers({
  selectedItem: selectedItemSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
