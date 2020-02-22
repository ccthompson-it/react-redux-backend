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
      <div>
        <h1 className="title">This is the Home Page!</h1>
        <p>I made myself a boilerplate because I was sick of not having one with everything on it.</p>
        <button onClick={this.handleButton}>About</button>
      </div>
    )
  }
}


export default connect()(App)