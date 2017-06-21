/*import Immutable from 'immutable';
const defaultState = new Immutable.List();
export default function fakeReducer(state = defaultState, action) {
  switch(action.type) {
    case 'GET_FAKE_DATA':
      return state.concat(action.res);
    default:
      return state;
  }
}
*/

import update from "react-addons-update";

const fakeReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_FAKE_DATA":
      return update(state, {
        dummyData:{
            $set:action.payload
        }
      });
    case "SET_NAME":
        return update(state, {
            name:{
                $set:action.payload
            }
        });
    default:
      return state;
  }
};

export default fakeReducer;