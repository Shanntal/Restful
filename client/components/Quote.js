import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getResources } from '../store/resources';

const categories = ["love", "stress & aniexty", "family", "mourning", "friendship", "art", "life", "pets", "history", "traveling", "independence", "mental health", "relationships", "affirmation", "body positivity", "self-love", "personal growth", "Gratitude", "happiness", "career", "success", "wealth", "health"];

class Quote extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const quotes = this.props.quotes;
        console.log('render', quotes)

        return (
            <div>
                    {
                    quotes.map((quote) =>
                        <div key={quote.id}>
                            <Link to={`/resources/quotes/${quote.id}`}>
                                <button>{quote.category}</button>
                            </Link>
                       </div>
                    )}
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        quotes: state.resources.filter((resource) => resource.type === 'quote')
    }
}

// const mapDispatchToProps = {
//     getResources
// }

export default connect(mapState)(Quote)