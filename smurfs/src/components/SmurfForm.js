import React from 'react';

import { connect } from 'react-redux';
import { postSmurf } from '../actions';

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

  render() {
    return(
      <form>
        <div>
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

        <div>
         <button onClick={this.handlePost}>Add Smurf</button>
         <button>Update Smurf</button>
        </div>
      </form>
    );
  }
}

const mstp = state => {
  console.log(state)
  return {
    smurfs: state.smurfs,
  }
}

export default connect(mstp, { postSmurf })(SmurfForm);
