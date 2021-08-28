import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getResources } from '../store/resources';

const categories = ["love", "stress & aniexty", "family", "mourning", "friendship", "art", "life", "pets", "history", "traveling", "independence", "mental health", "relationships", "affirmation", "body positivity", "self-love", "personal growth", "Gratitude", "happiness", "career", "success", "wealth", "health"];

class Book extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const books = this.props.books;
        console.log('render', books)

        return (
            <div>
                    {
                    books.map((book) =>
                        <div key={book.id}>
                            <Link to={`/resources/books/${book.id}`}>
                                <button>{book.category}</button>
                            </Link>
                       </div>
                    )}
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

export default connect(mapState)(Book)