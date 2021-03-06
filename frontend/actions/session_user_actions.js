import * as APIUtil from "../util/session_user_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors: errors.responseJSON
});

export const fetchCurrentUser = () => dispatch =>
  APIUtil.fetchCurrentUser().then(user => dispatch(receiveCurrentUser(user)));

export const signup = user => dispatch =>
  APIUtil.signup(user).then(
    user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err))
  );

export const login = user => dispatch =>
  APIUtil.login(user).then(
    user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err))
  );

export const logout = () => dispatch =>
  APIUtil.logout().then(user => dispatch(logoutCurrentUser()));
