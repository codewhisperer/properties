var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var Link = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;
var IndexRoute = require('react-router').IndexRoute;

require('materialize-css/bin/materialize.css')
require('materialize-css/bin/materialize.js')


class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/page2">Page 2</Link></li>
        </ul>

        <ReactCSSTransitionGroup
          component="div"
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname
          })}
        </ReactCSSTransitionGroup>

      </div>
    )
  }
}


class Index extends React.Component {
  render() {
    return (
      <div className="Image">
        <h1>Index</h1>
        <p>Animations with React Router are not different than any other animation.</p>
      </div>
    )
  }
}

class Users extends React.Component {
  render() {
    return (
      <div className="Image">
        <h1>Users</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    )
  }
}

class Page2 extends React.Component {
  render() {
    return (
      <div className="Image">
        <h1>Page 2</h1>
        <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    )
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="users" component={Users} />
      <Route path="page2" component={Page2} />
    </Route>
  </Router>
), document.getElementById('content'))
