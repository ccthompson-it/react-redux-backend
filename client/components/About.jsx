import React, {Component} from 'react'
import {connect} from 'react-redux'
import { changePage } from '../actions'

class App extends Component {

  handleButton = () => {
    let { dispatch } = this.props
    dispatch(changePage('home'))
  }

  render() {
    return (
      <div id='content'>
        <h1>This App Contains:</h1>
        <p>a single, simple API endpoint (`/api/v1/fruits`)</p>
        <p>a single React component (App)</p>
        <p>a fake database module (`db.js`)</p>
        <p>an API client module (`apiClient.js`)</p>
        <p>configuration for Jest and Enzyme (including JSDOM)</p>
        <p>configuration for server-side debugging in VS Code</p>
        <p>a single client-side test (`/tests/client/App.test.js`)</p>
        <button onClick={this.handleButton}>Home</button>
      </div>
    )
  }
}


export default connect()(App)