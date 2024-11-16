import {SEARCH} from './actionstype';

export const search = (filter) => {
    return{
        type: SEARCH,
        payload: filter
    }
}
