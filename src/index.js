import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './app'
import Home from './views/home'
import About from './views/about'
const renderRouter = () => {
  console.log('window.APP_PROPS::::', window.APP_PROPS)
  return (
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} initCount={window.APP_PROPS.initCount}/>
        <Route path='/home' component={Home} initCount={window.APP_PROPS.initCount}/>
        <Route path='/about' component={About}/>
      </Route>
    </Router>
  )
}
window.onload = function () {
  render(renderRouter(), document.getElementById('app'))
}
