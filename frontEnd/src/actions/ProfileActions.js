import {
    ADD_NAME, DELETE_NAME, UPDATE_NAME, ADD_LASTNAME, DELETE_LASTNAME, UPDATE_LASTNAME,
    UPDATE_PASSWORD, ADD_ADRESS, DELETE_ADRESS, UPDATE_ADRESS,
    ADD_ZIPCODE, DELETE_ZIPCODE, UPDATE_ZIPCODE, ADD_PHONENUMBER, DELETE_PHONENUMBER, UPDATE_PHONENUMBER,
    ADD_WEBSITE, DELETE_WEBSITE, UPDATE_WEBSITE, ADD_YEAR, DELETE_YEAR, UPDATE_YEAR,
    ADD_REGION, DELETE_REGION, UPDATE_REGION, ADD_LANGUES, DELETE_LANGUES, UPDATE_LANGUES
} from './actionstype';

// @ NAME
export const addName = ( newName ) => {
    return{
        type: ADD_NAME,
        payload: newName,
    }
} 