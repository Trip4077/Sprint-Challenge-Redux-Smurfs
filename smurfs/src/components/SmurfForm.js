import React from 'react';

import { connect } from 'react-redux';
import { postSmurf } from '../actions';

class SmurfForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      height: '',
      age: ''
    }
  }

  handleChange = e => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value })
  }

  handlePost = e => {
    e.preventDefault();

    this.props.addSmurf(this.state);
    this.setState({
      name: '',
      height: '',
      age: '',
    })
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
        </div>

        <div>
         <button>Add Smurf</button>
        </div>
      </form>
    );
  }
}

export default connect(null, { postSmurf })(SmurfForm);
