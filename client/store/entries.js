import axios from 'axios';

//ACTION TYPES

const GET_ENTRIES = 'GET_ENTRIES';
const CREATE_ENTRY = 'CREATE_ENTRY';

//ACTION CREATORS

const _getEntries = (entries) => {
    return {
        type: GET_ENTRIES,
        entries
    };
};

const _createEntry = (entry) => {
    return {
        type: CREATE_ENTRY,
        entry
    };
};

//THUNK CREATORS

export const getEntries = () => {
    return async (dispatch) => {
        const { data: entries } = await axios.get('/api/entries');
        dispatch(_getEntries(entries));
    };
};

export const createEntry = (entry, history) => {
    return async (dispatch) => {
        const { data: created } = await axios.post('/api/entries', entry);
        dispatch(_createEntry(created));
        history.push('/entries'); /* Wherever we want to redirect! */
    };
};

export const updateEntry = (entry) => {
    const id = entry.id;
    return async (dispatch) => {
        const { data: updated } = await axios.post(`/api/entries/${id}`, entry);
    };
};

//REDUCER

export const entriesReducer = (state = [], action) => {
    switch (action.type) {
        case GET_ENTRIES:
            return action.entries;
        case CREATE_ENTRY:
            return [...state, action.entry];
        default:
            return state
    };
};