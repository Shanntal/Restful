import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
 
/**
 * COMPONENT
 */
export const Home = props => {
  const {username} = props

  return (
    <div>
      <h1>Hey, {username}!</h1>
      <h4>Today is a new day with new words.</h4>
      <Link to='/resources'>
        <button type='button'>Get Started</button>
      </Link>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.auth.username
  }
}

export default connect(mapState)(Home)
