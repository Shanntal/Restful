import axios from 'axios';

//ACTION TYPES

const GET_RESOURCES = 'GET_RESOURCES';
const CREATE_RESOURCE = 'CREATE_RESOURCE';

//ACTION CREATORS

const _getResources = (resources) => {
    return {
        type: GET_RESOURCES,
        resources
    };
};

const _createResource = (resource) => {
    return {
        type: CREATE_RESOURCE,
        resource
    };
};

//THUNK CREATORS

export const getResources = () => {
    return async (dispatch) => {
        const { data: resources } = await axios.get('/api/resources');
        dispatch(_getResources(resources));
    };
};

export const createResource = (resource, history) => {
    return async (dispatch) => {
        const { data: created } = await axios.post('/api/resources', resource);
        dispatch(_createResource(created));
        history.push('/resources'); /* Wherever we want to redirect! */
    };
};

export const updateResource = (resource) => {
    const id = resource.id;
    return async (dispatch) => {
        const { data: updated } = await axios.post(`/api/resources/${id}`, resource);
    };
};

//REDUCER

export const resourcesReducer = (state = [], action) => {
    switch (action.type) {
        case GET_RESOURCES:
            return action.resources;
        case CREATE_RESOURCE:
            return [...state, action.resource];
        default:
            return state
    };
};