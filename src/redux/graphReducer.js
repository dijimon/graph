import {FETCH_GRAPH_DATA, SAVE_GRAPH_PARAMS} from './types';
const initialState = {
    fetchedGraphData: {},
    graphParams: {from: -2, to: 2, step: 0.1}
};

// Pure Functions
export const graphReducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_GRAPH_DATA:
        return {...state, fetchedGraphData: action.payload};
    case SAVE_GRAPH_PARAMS:
        return {...state, graphParams: action.payload};
    default:
        return state;
    }
};
