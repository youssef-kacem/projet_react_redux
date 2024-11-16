import {combineReducers} from 'redux' ;
import Reducer from './Reducers' ;
import AuthReducer from './AuthReducer' ;
import AlertReducer from './AlertReducer';
import ProfileReducer from './ProfileReducer';
import OffresReducer from './OffresReducer';



export default combineReducers ({Reducer, auth: AuthReducer, alert: AlertReducer, profile: ProfileReducer, offres: OffresReducer})