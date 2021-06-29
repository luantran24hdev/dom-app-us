import {LOGIN_SUCCESS} from './actions'
import {Storage} from '../../helpers'
const initState = { access_token:Storage.getToken() || ''};
export default function authReducer(state = initState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        access_token:action.payload.token
      }
    default:
      return state
  }
}
