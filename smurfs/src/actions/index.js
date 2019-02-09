import axios from 'axios';
/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const GET_PEND = 'GET_PEND';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAIL = 'GET_FAIL';

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
