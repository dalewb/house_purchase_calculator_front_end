import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class TestInput extends Component {
  state = {
    inputValue: '',
  }

  handleChange = e => {
    this.setState({
      inputValue: e.target.value
    })
  }

  render() {
    return (
      <form noValidate autoComplete="off">
        <TextField
          id="outlined-name"
          label="Name"
          value={this.state.inputValue}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />
      </form>
    )
  }
}

export default TestInput;
