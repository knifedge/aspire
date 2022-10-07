import {combineReducers} from '@reduxjs/toolkit';
import globalReducer from './globalReducer';

const appReducer = combineReducers({
  globalReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'persist/PURGE') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
