import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getResources } from '../store/resources';


class QuoteContent extends React.Component {
    constructor(props) {
        super(props);

    }

    // async componentDidMount() {
    //     await this.props.getResources();
    // }

    render() {
        const currentUrlObj = this.props.location
        const currentId = (currentUrlObj.pathname.split('/'))[3];
        console.log('ID:', currentId)
        console.log('type of currentId:', typeof currentId)
        
        const quotes = this.props.quotes;
        console.log('QUOTES', quotes)

        const quote = quotes.find((quote) => quote.id === currentId)
        console.log('SINGLE QUOTE', quote)
        return (
            <div>
                <div> 
                <h1>{quote.content}</h1>
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
        quotes: state.resources.filter((resource) => resource.type === 'quote')
    }
}

// const mapDispatchToProps = {
//     getResources
// }

export default connect(mapState)(QuoteContent)

////////////////////////

// const QuoteContent = ({ quotes, match }) => {
//     const quote = quotes.filter(quote => quote.id === match.params.id)[0]
//     console.log('QUOTE', quote)
//     return (
//         <div>
//             hello
//         </div>
//     )
// }

// const mapStateToProps = (state) => {
//     return {
//         quotes: state.resources.filter((resource) => resource.type === 'quote')
//     }
// }

/*
const QuoteContent = ({ resources, match }) => {
    // const current = this.props.location
    // console.log(current)
    const quotes = resources.filter((resource) => resource.type === 'quote')
    const quote = quotes.filter(quote => quote.id === match.params.id)[0]
    console.log('QUOTE', quote)
    console.log('Here now', resources)
    return (
        <div>
            hello
        </div>
    )
}

const mapStateToProps = ({ resources }) => {
    return {
        resources
    }
}

export default connect(mapStateToProps)(QuoteContent)
*/