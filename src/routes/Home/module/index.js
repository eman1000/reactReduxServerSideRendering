// @flow
import update from "react-addons-update";
import constants from "./actionConstants";
import axios from "axios";
import getFakeDataApi from "../../../../api";
//Import constants
const {
    GET_FAKE_DATA
} = constants;
//=====================================
//Action Creators
//=====================================


type State = {
  name: String,
  showPanel:Boolean,
  dummyData:Object
};
type Action = { type: string; payload: Object };
type Dispatch = (action: Action) => void;
export function getFakeData(){
    return (dispatch:Dispatch, store:Object)=>{
        axios.all([getFakeDataApi()])
        .then(axios.spread((res)=>{
            dispatch({
                type:GET_FAKE_DATA,
                payload:res.data
            });
        }))
        .catch((err)=>{
            console.log(err);
        });
    };
}

//======================================
//Action Handlers / Reducers
//======================================
function handleGetFakeData(state:State, action:Action):State{
    return update(state, {
        dummyData:{
            $set:action.payload
        }
    });
}

const ACTION_HANDLERS = {
    GET_FAKE_DATA:handleGetFakeData
};
const initialState = {
};

const homeReducer = (state:State = initialState, action: Action) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
};

export default homeReducer;