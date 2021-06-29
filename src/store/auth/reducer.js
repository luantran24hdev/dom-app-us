import {LOGIN_SUCCESS} from './actions'
const initState = { access_token:""};
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
