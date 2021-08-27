import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import { Login, Signup } from './components/AuthForm';
import Home from './components/Home';
import Journal from './components/Journal';
import ResourceQuestion from './components/ResourceQuestion';
import CategoryQuestion from './components/CategoryQuestion';
import {me} from './store'
import Quote from './components/Quote';
import QuoteContent from './components/QuoteContent';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/home" component={Home} />
            {/* <Redirect to="/home" /> */}
            <Route path="/journal" component={Journal}/>
            <Route exact path="/resources" component={ResourceQuestion}/>
            <Route path="/resources/quotes" component={Quote}/>
            <Route path="/resources/quotes/:id" component={QuoteContent}/>
            {/* <Route path="/resources/poems" component={Poem}/>
            <Route path="/resources/books" component={Book}/> */}
            <Route exact path="/categories" component={CategoryQuestion}/>
            {/* <Route path="/categories/:id" component={CategoryItem}/> */}
          </Switch>
        ) : (
          <Switch>
            <Route path='/' exact component={ Login } />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        )}
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))
