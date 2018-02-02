import React from 'react'

export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: this.props.initCount || this.props.route.initCount
    }
  }

  handleClick () {
    this.setState({
      count: this.state.count + 1
    })
  }

  render () {
    console.log('count:', this.state.count)
    return <button onClick={this.handleClick.bind(this)}>click me to increment: {this.state.count}</button>
  }
}