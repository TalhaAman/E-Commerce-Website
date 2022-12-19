import { combineReducers } from '@reduxjs/toolkit';

import cartSlice from './cartSlice';
import listSlice from './listSlice';

const rootReducer = combineReducers({
  cart: cartSlice,
  list: listSlice
});

export default rootReducer;