export const LOGIN = "LOGIN";
export const LOGINSUCCESS = "LOGINSUCCESS";
export const LOGINOTPREQUEST = "LOGINOTPREQUEST";
export const LOGINASYNC = "LOGINASYNC";
export const ERRORMSG = "ERRORMSG";
// Initial States 
export const initialState = {
  userName: null,
  verifyOtp: null,
  isLogInConfirm : false
};

// Reducer with different actions 
export function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGINOTPREQUEST:
      console.log(action.data);
      state.userName = action.data.email;
      return state;
    case LOGIN:
      console.log(action.otp)
      state.verifyOtp = action.otp;
      return state;
    default:
      return state;
  }
}
