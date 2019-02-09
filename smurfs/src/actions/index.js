import axios from 'axios';
/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const GET_PEND = 'GET_PEND';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAIL = 'GET_FAIL';

export const POST_PEND = 'POST_PEND';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAIL = 'POST_FAIL';

export const DELETE_PEND = "DELETE_PEND";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAIL = "DELETE_FAIL";

export const UPDATE_PEND = 'UPDATE_PEND';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const UPDATE_FAIL = 'UPDATE_FAIL';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_PEND });

  axios.get('http://localhost:3333/smurfs')
    .then(res =>
      dispatch({ type: GET_SUCCESS, payload: res.data })
    )
    .catch(err =>
      dispatch({ type: GET_FAIL, payload: err })
    );
}

export const postSmurf = smurf => dispatch => {
  dispatch({ type: POST_PEND });

  axios.post('http://localhost:3333/smurfs', smurf)
    .then(res =>
      dispatch({ type: POST_SUCCESS, payload: res.data })
    )
    .catch(err =>
      dispatch({ type: POST_FAIL, payload: err })
    );
}

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_PEND })

  axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res =>
      dispatch({ type: DELETE_SUCCESS, payload: res.data })
    )
    .catch(err =>
      dispatch({ type: DELETE_FAIL, payload: err })
    );
}

export const updateSmurf = (smurf, id) => dispatch => {
  dispatch({ type: UPDATE_PEND })

  axios.put(`http://localhost:3333/smurfs/${id}`, smurf)
    .then(res =>
      dispatch({ type: UPDATE_SUCCESS, payload: res.data })
    )
    .catch(err =>
      dispatch({ type: UPDATE_FAIL, payload: err })
    );
}
