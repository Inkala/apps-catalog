import * as actionTypes from '../actions/actionTypes';
import { allTopApps } from '../../helpers/apps-service';

const initialState = {
  allTopApps,
  hostsList: Object.keys(allTopApps),
  isVisible: false,
  viewStyle: 'grid'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_TOP_APPS:
      return {
        ...state        
      };
    case actionTypes.GET_TOP_APPS_BY_HOST:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
