// @flow
import update from "react-addons-update";
import axios from "axios";
import getFakeDataApi from "../../../../api";
import * as actionTypes from "./actionConstants";
import * as types from "../../../../types";
//=====================================
//Action Creators
//=====================================

type Action = { type: string; payload: Object };
type Dispatch = (action: Action) => void;
export function getFakeData(){
    return (dispatch:Dispatch, store:Object)=>{
        axios.all([getFakeDataApi()])
        .then(axios.spread((res)=>{
            dispatch({
                type:actionTypes.GET_FAKE_DATA,
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



function handleGetFakeData(state:types.State, action:types.Action){
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

//type Reducer<S, A: types.Action> = (S, A) => S;

const homeReducer = (state:Object = initialState, action: Object) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
};

export default homeReducer;