import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getResources } from '../store/resources';

const categories = ["love", "stress & aniexty", "family", "mourning", "friendship", "art", "life", "pets", "history", "traveling", "independence", "mental health", "relationships", "affirmation", "body positivity", "self-love", "personal growth", "Gratitude", "happiness", "career", "success", "wealth", "health"];

class Quote extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     quotes: []
        // }
    }
    
    async componentDidMount() {
        await this.props.getResources();
        //this.setState({ quotes: this.props.quotes })
        console.log('here', this.props.quotes)
    }

    render() {
        const quotes = this.props.quotes;
        console.log('render', quotes)
/*
        for (let i = 0; i < quotes.length; i++) {
            if(quotes.category === categori) {
                const wantedCategory = quotes[i]
                <Link to={`/resources/${wantedCategory.id}`}>
                    <button>{categori}</button>
                </Link>
            }
        }
*/
////works:
//const pG = quotes[17]
//console.log(pG)

////doesn't work:
//const pGID = (quotes[17]).id
//console.log(pG)
        return (
            <div>
                    {
                    categories.map((categori) =>
                        <div key={categori.id}>
                            <Link to={`/resources/${categori}`}>
                                <button>{categori}</button>
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

const mapDispatchToProps = {
    getResources
}

export default connect(mapState, mapDispatchToProps)(Quote)