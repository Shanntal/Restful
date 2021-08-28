import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { getResources } from '../store/resources';
import { getEntries } from '../store/entries';

/**
 * COMPONENT
 */
export const Home = props => {
  const {username, getResources, getEntries} = props

  useEffect(() => {
      getResources()
      getEntries()
  }, [])


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

const mapDispatchToProps = {
  getResources,
  getEntries
}

export default connect(mapState, mapDispatchToProps)(Home)
