import React from 'react';
import { Link } from 'react-router-dom';
import { getResources } from '../store/resources';
import { connect } from "react-redux";

class ResourceQuestion extends React.Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        await this.props.getResources
    }

    render() {
        return (
            <div>
                Resource Question
                <Link to='/resources/quotes'>
                    <button>Quotes</button>
                </Link>
                <Link to='/resources/poems'>
                    <button>Poems</button>
                </Link>
                <Link to='/resources/books'>
                    <button>Books</button>
                </Link>


            </div>
        )
    }
}

const mapState = (state) => {
    return {
        resources: state.resources
    }
}

const mapDispatchToProps = {
    getResources
}

export default connect(mapState, mapDispatchToProps)(ResourceQuestion);
