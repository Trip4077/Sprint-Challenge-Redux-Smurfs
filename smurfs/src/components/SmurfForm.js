import React from 'react';

import { connect } from 'react-redux';
import { postSmurf, updateSmurf } from '../actions';

class SmurfForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      height: '',
      age: '',
      id: ''
    }
  }

  generateSmurf = smurf => {
    const name = this.state.name || smurf.name;
    const height = this.state.height || smurf.height;
    const age = this.state.age || smurf.age;
    const id = smurf.id;

    return {
      name: name,
      height: height,
      age: age,
      id: id
    }
  }

  handleChange = e => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value })
  }

  handlePost = e => {
    e.preventDefault();

    this.props.postSmurf(this.state);
    this.setState({
      name: '',
      height: '',
      age: '',
    });
  }

  handleUpdate = e => {
    e.preventDefault();

    const id = this.state.id
    const smurf = this.props.smurfs.filter(smurf => Number(smurf.id) === Number(id) )[0];

    const newSmurf = this.generateSmurf(smurf)

    this.props.updateSmurf(newSmurf, id)
  }

  render() {
    return(
      <form>
        <div className='input--box'>
          <input type='text'
                 name='name'
                 placeholder='Name'
                 onChange={this.handleChange}
                 value={this.state.name}
                 />
          <input type='text'
                 name='age'
                 placeholder='Age'
                 onChange={this.handleChange}
                 value={this.state.age}
                 />
          <input type='text'
                 name='height'
                 placeholder='Height'
                 onChange={this.handleChange}
                 value={this.state.height}
                 />
          <input type='text'
                 name='id'
                 placeholder='ID for update: 0, 1, 2, ....'
                 onChange={this.handleChange}
                 value={this.state.id}
                 />
        </div>

        <div className='btn--box'>
         <button onClick={this.handlePost}><span>Add Smurf</span></button>
         <button onClick={this.handleUpdate}><span>Update Smurf</span></button>
        </div>
      </form>
    );
  }
}

const mstp = state => {
  return {
    smurfs: state.smurfs,
  }
}

export default connect(mstp, { postSmurf, updateSmurf })(SmurfForm);
