import React, { Component } from 'react';
import './App.css';

const marked = require("marked");

let placholderMessage = `
# This is React Markdown Previewer Project
## This is a sub-heading...
### And here's some other cool stuff:
Heres some code
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: placholderMessage
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange (event) {
    this.setState({text: event.target.value});
  }

  render() {
    return (
      <div className="app">
        <div className = "app__content">
          <div id="editor__container">
            <div id="editor__heading">#Editor</div>
            <textarea id="editor" value={this.state.text} onChange={this.onChange}></textarea>
          </div>
          <div id="app__division"></div>
          <div id="preview">
            <div id="preview__heading">#Preview</div>
          <div id="preview__view" dangerouslySetInnerHTML = {{__html: marked(this.state.text)}}></div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
