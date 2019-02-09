import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';

const Smurf = props => {

  const handleDelete = e => {
    e.preventDefault();

    props.deleteSmurf(props.smurf.id);
  }

  return(
    <div>
      <h1>{props.smurf.name}</h1>
      <h2>{props.smurf.age}</h2>
      <h3>{props.smurf.height}</h3>
      <h4 onClick={handleDelete}>&times;</h4>
    </div>
  );
}

export default connect(null, { deleteSmurf })(Smurf);
