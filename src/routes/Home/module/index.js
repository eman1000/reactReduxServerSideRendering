import request from "../../../util/request";
import update from "react/lib/update";
import constants from "./actionConstants";
const {
} = constants;

function handleToggleModal(state, action){
    return update(state, {
        showModal:{
            $set:!state.showModal
        }
    });
}
const ACTION_HANDLERS = {
    TOGGLE_MODAL:handleToggleModal
};

const initialState = {
    showPanel:{},
    name:"Eman"
};
export default function homeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
