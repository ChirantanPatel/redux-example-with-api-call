import * as types from '../actions/actionTypes';

const initialState = {
    items: [],
    item: {},
    EditByID: {}
}

export default function (state = initialState, action) {

    switch (action.type) {
        case types.FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        case types.NEW_POST:
            return {
                ...state,
                item: action.payload
            }
        case types.FETCH_POSTS_BYID:
            return {
                ...state,
                EditByID: action.payload
            }
        case types.DELETE_POSTS:
            return {
                ...state
            }
        default:
            return state;
    }
}