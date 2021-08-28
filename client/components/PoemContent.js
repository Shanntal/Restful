import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getResources } from '../store/resources';


class PoemContent extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const currentUrlObj = this.props.location
        const currentId = (currentUrlObj.pathname.split('/'))[3];
        console.log('ID:', currentId)
        console.log('type of currentId:', typeof currentId)
        
        const poems = this.props.poems;
        console.log('POEMS', poems)

        const poem = poems.find((poem) => poem.id === currentId)
        console.log('SINGLE POEM', poem)
        return (
            <div>
                <div> 
                <h1>{poem.content}</h1>
                <Link to='/entries'>
                    <button>Journal About It!</button>
                </Link>
                </div>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        poems: state.resources.filter((resource) => resource.type === 'poem')
    }
}

// const mapDispatchToProps = {
//     getResources
// }

export default connect(mapState)(PoemContent)