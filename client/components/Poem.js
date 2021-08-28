import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getResources } from '../store/resources';

const categories = ["love", "stress & aniexty", "family", "mourning", "friendship", "art", "life", "pets", "history", "traveling", "independence", "mental health", "relationships", "affirmation", "body positivity", "self-love", "personal growth", "Gratitude", "happiness", "career", "success", "wealth", "health"];

class Poem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const poems = this.props.poems;
        console.log('render', poems)

        return (
            <div>
                    {
                    poems.map((poem) =>
                        <div key={poem.id}>
                            <Link to={`/resources/poems/${poem.id}`}>
                                <button>{poem.category}</button>
                            </Link>
                       </div>
                    )}
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

export default connect(mapState)(Poem)