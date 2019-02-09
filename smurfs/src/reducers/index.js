/*
  Be sure to import in all of the action types from `../actions`
*/

import {
  GET_PEND,
  GET_SUCCESS,
  GET_FAIL,
  POST_PEND,
  POST_SUCCESS,
  POST_FAIL
} from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
  smurfs: [],
  getSmurfsActive: false,
  postSmurfs: false,
  putSmurfs: false,
  deleteSmurg: false,
  error: ''
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_PEND: {
      return {
        ...state,
        getSmurfsActive: true
      }
    }

    case GET_SUCCESS: {
      return {
        ...state,
        smurfs: action.payload,
        getSmurfsActive: false
      }
    }

    case GET_FAIL: {
      return {
        ...state,
        getSmurfs: false,
        error: action.payload
      }
    }

    case POST_PEND: {
      return {
        ...state,
        postSmurfs: true
      }
    }

    case POST_SUCCESS: {
      return {
        ...state,
        smurfs: action.payload,
        postSmurfs: false
      }
    }

    case POST_FAIL: {
      return {
        ...state,
        postSmurfs: false,
        error: action.payload
      }
    }

    default:
      return state;
  }
}
