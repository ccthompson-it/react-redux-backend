import React, {Component} from 'react'
import {connect} from 'react-redux'
import { changePage } from '../actions'

class App extends Component {

  handleButton = () => {
    let { dispatch } = this.props
    dispatch(changePage('about'))
  }

  render() {
    return (
      <div id='content'>
        <h1>This is the Home Page!</h1>
        <p>Hello World!</p>
        <button onClick={this.handleButton}>About</button>
      </div>
    )
  }
}


export default connect()(App)