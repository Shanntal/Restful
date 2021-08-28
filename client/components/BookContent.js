import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getResources } from '../store/resources';


class BookContent extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const currentUrlObj = this.props.location
        const currentId = (currentUrlObj.pathname.split('/'))[3];
        console.log('ID:', currentId)
        console.log('type of currentId:', typeof currentId)
        
        const books = this.props.books;
        console.log('Books', books)

        const book = books.find((book) => book.id === currentId)
        console.log('SINGLE BOOK', book)
        return (
            <div>
                <div> 
                <h1>{book.content}</h1>
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
        books: state.resources.filter((resource) => resource.type === 'book')
    }
}

// const mapDispatchToProps = {
//     getResources
// }

export default connect(mapState)(BookContent)