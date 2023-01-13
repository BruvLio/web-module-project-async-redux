import { GET_ALL_CHARACTERS, ERR_MESSAGE } from '../actions'

const initialState = {
    characters: [],
    errorMessage: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CHARACTERS:
            return {
                ...state,
                characters: action.payload
            }
        case ERR_MESSAGE:
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}

export default reducer;
