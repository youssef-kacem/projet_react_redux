import {
    ADD_NAME, DELETE_NAME, UPDATE_NAME, ADD_LASTNAME, DELETE_LASTNAME, UPDATE_LASTNAME,
    UPDATE_PASSWORD, ADD_ADRESS, DELETE_ADRESS, UPDATE_ADRESS,
    ADD_ZIPCODE, DELETE_ZIPCODE, UPDATE_ZIPCODE, ADD_PHONENUMBER, DELETE_PHONENUMBER, UPDATE_PHONENUMBER,
    ADD_WEBSITE, DELETE_WEBSITE, UPDATE_WEBSITE, ADD_YEAR, DELETE_YEAR, UPDATE_YEAR,
    ADD_REGION, DELETE_REGION, UPDATE_REGION, ADD_LANGUES, DELETE_LANGUES, UPDATE_LANGUES
} from '../actions/actionstype';

const ProfileReducer = (state = { name: [], lastName: [], adress: [], region: [], zipCode: [], phoneNumber: [], webSite: [], year: [], langues: [] }, action) => {
    switch (action.type) {

        // @ NAME
        case ADD_NAME:
            return {
                ...state,
                name: [...state.name, action.payload]
            }
            
        default:
            return state
    }
}

export default ProfileReducer;