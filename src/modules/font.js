//타입 생성

import { createAction, handleActions } from "redux-actions";

const INCREASE = "count/INCREASE";
const DECREASE = "count/DECREASE";

//액션 생성

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
  number : 0
}
// reducer 생성

const count = handleActions({
    [INCREASE] : (state, action) => ({number : parseInt(state.number) + parseInt(action.payload)}),
    [DECREASE] : (state, action) => ({number : parseInt(state.number) - parseInt(action.payload)}),
})

