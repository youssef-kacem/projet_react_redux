import {SEARCH} from "../actions/actionstype";
import uuid from 'uuid'

let films = [
    {
        rating: 2,
    },
  
]

const OffresReducer = (state = films, action) => {
    switch (action.type) {
        case SEARCH:
            return (
                films.filter(el => el.title.toUpperCase().includes(action.payload.name.toUpperCase().trim()) && el.rating >= action.payload.rating)
            )
        default:
            return state;
    }
};

export default OffresReducer;
