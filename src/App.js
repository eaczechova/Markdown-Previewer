import React, { Component } from 'react';
import './App.css';

const marked = require("marked");

const placholderMessage = `
# This is React Markdown Previewer Project
## This is a sub-heading...
### And here's some other cool stuff:
Heres some code
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      text: placholderMessage
    };
  }

  handleChange (event) {
    this.setState({
      text: event.target.value,
    });
  }

  render() {
    return (
      <div className="app">
        <div className="app__content">
          <div className="editor">
            <div className="editor__heading">#Editor</div>
            <textarea className="editor__view" onChange={this.handleChange}>{this.state.text}</textarea>
          </div>
          <div className="app__division"></div>
          <div className="preview">
            <div className="preview__heading">#Preview</div>
            <div className="preview__view" dangerouslySetInnerHTML = {{__html: marked(this.state.text)}}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
