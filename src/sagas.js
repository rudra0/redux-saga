import { put, takeEvery, all, call, cancel } from "redux-saga/effects";
import {
  LOGIN,
  LOGINASYNC,
  LOGINOTPREQUEST,
  ERRORMSG,
} from "./reducers";
import { delay } from "redux-saga/effects";


function* requestOtp(otp) {
  try {
    const result = yield put({ type: LOGIN, otp });
    return result.data.otp;
  } catch (error) {
    yield put({ type: ERRORMSG, error });
  }
}

// Login Flow followed by the Login Request and OTP
function* logInFlow(action) {
  while(true)
  {
    let data = action.data;
  yield delay(2000)
  const newData = yield put({ type: LOGINOTPREQUEST, data });
  const result = yield call(requestOtp, newData.data.otp);
  
  }
}

function* watchLoginAsync() {
  yield takeEvery(LOGINASYNC, logInFlow);
}

export function* rootSagas() {
  yield all([watchLoginAsync()]);
}
