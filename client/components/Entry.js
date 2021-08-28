import React from 'react';
import { Link }from 'react-router-dom';
import { connect } from "react-redux";
import { getEntries } from '../store/entries';
import Form from './Form';

class Entry extends React.Component {
    constructor(props) {
        super(props);
    }

    // async componentDidMount () {
    //     await this.props.getEntries()
    //     console.log('hereEntries', this.props.entries)
    // }

    render() {
        const entries = this.props.entries//.filter((entry) => entry.userId === userId)
        const userID = this.props.userId
        const username = this.props.username

        const userEntries = entries.filter((entry) => entry.userId === userID)

        console.log('USER ENTRIES:', userEntries)
        console.log('userId:', userID)
        console.log('NAME:', username)
        return (
            <div>
                <h3>{username}'s Journal</h3>
                <div>
                    {
                    userEntries.map((userEntry) =>
                        <div key={userEntry.id}>
                            <li>{userEntry.content}</li>
                        </div>
                    )}
                </div>
                <div className='form'>
                    <Link to='/entries/add'>
                        <button>Add Entry</button>
                    </Link>
                </div>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        userId: state.auth.id,
        username: state.auth.username,
        entries: state.entries
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getEntries
//     }
// }

export default connect(mapState)(Entry);
