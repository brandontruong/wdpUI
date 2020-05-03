import { createReducer } from 'reduxsauce';
import Types from '../actions/Types';

export const INITIAL_STATE = {
  companyInfo: null,
  employees: [],
};

export const fetchDataSuccessful = (state, action) => ({ ...state, companyInfo: action.dataSource.companyInfo, employees: action.dataSource.employees });

// map our types to our handlers
export const ACTION_HANDLERS = {
  [Types.FETCH_DATA_SUCCESSFUL]: fetchDataSuccessful,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
