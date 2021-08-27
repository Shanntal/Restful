import React from 'react';
import Link from 'react-router-dom';
import { connect } from "react-redux";

class Journal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                JOURNAL ENTRIES
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

export default connect(mapState, mapDispatchToProps)(Journal);
