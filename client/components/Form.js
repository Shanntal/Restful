import React from 'react';
import { connect } from 'react-redux';
import { createEntry } from '../store/entries';
import { v4 as uuidv4} from 'uuid';

const initialState = {
    content: ''
}

class EntryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    onSave = async(evt) => {
        evt.preventDefault();
        const { state } = this;
        try {
            await this.props.createEntry({
                id: uuidv4,
                content: state.content
            })
        this.setState(initialState)
        }
        catch(error) {
            console.log(error)
        }
    }

    onChange = (evt) => {
        const change = {};
        change[evt.target.name] = evt.target.value;
        this.setState(change);
    }

    render() {
        const { onSave, onChange } = this;
        const { content } = this.state;

        return(
            <div className='CreateEntry'>
                <form onSubmit= { onSave }>
                    <input placeholder="What's on your mind?" name='content' value={ content } onChange= { onChange } /> 
                    <button>Save Entry</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = {
    createEntry
}

export default connect(mapStateToProps, mapDispatchToProps)(EntryForm);