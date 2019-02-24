import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange (event) {
    this.setState({text: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <textarea id="editor" onChange={this.onChange}></textarea>
        <div id="preview">{this.state.text}</div>
      </div>
    );
  }
}

export default App;
