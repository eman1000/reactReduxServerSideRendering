import request from "../../../util/request";
import update from "react/lib/update";
import { push } from "react-router-redux";
import services from "../../../services";
import constants from "./actionConstants";
const {
    TOGGLE_MODAL
} = constants;
export function toggleModal(payload){
    return {
        type:TOGGLE_MODAL,
        payload
    };
}
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
    showPanel:{}
};
export default function welcomeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
