import axios from "axios";


export const GET_ALL_CHARACTERS = 'GET_ALL_CHARACTERS';
export const ERR_MESSAGE = 'ERR_MESSAGE';

// export const getAllCharacters = () => {
//     console.log('action stuff')
//     return ({ type: GET_ALL_CHARACTERS });
// }

export const getAllCharacters = () => dispatch => {
    console.log('action stuff')
    axios.get('https://swapi.dev/api/people')
        .then(res => dispatch({ type: GET_ALL_CHARACTERS, payload: res.data.results }))
        .catch(err => dispatch({ type: ERR_MESSAGE, payload: err.message }))
}


