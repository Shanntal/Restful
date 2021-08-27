import React from 'react';
import Link from 'react-router-dom';
import { connect } from "react-redux";

class CategoryQuestion extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Category Question
            </div>
        )
    }
}

const mapState = (state) => {
    return {

    }
}

const mapDispatchToProps = {

}

export default connect(mapState, mapDispatchToProps)(CategoryQuestion);
