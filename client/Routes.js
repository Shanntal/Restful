import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import { Login, Signup } from './components/AuthForm';
import Home from './components/Home';
import Entry from './components/Entry';
import ResourceQuestion from './components/ResourceQuestion';
//import CategoryQuestion from './components/CategoryQuestion';
import {me} from './store'
import Quote from './components/Quote';
import QuoteContent from './components/QuoteContent';
import Poem from './components/Poem';
import PoemContent from './components/PoemContent';
import Book from './components/Book';
import BookContent from './components/BookContent';
import EntryForm from './components/Form'

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
            <Route exact path="/entries" component={Entry}/>
            <Route exact path="/resources" component={ResourceQuestion}/>
            <Route exact path="/resources/quotes" component={Quote}/>
            <Route exact path="/resources/quotes/:id" component={QuoteContent}/>
            <Route exact path="/resources/poems" component={Poem}/>
            <Route exact path="/resources/poems/:id" component={PoemContent}/>
            <Route exact path="/resources/books" component={Book}/>
            <Route exact path="/resources/books/:id" component={BookContent}/>
            <Route exact path="/entries/add" component={EntryForm}/>
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
