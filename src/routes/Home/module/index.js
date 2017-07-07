// @flow
import update from "react-addons-update";
import axios from "axios";
import getFakeDataApi from "../../../../api";
import * as actionTypes from "./actionConstants";
import * as types from "../../../../types";
import { browserHistory } from "react-router";
import { push } from "react-router-redux";
//mock api
import services from "../../../services";
//=====================================
//Action Creators
//=====================================

type Action = { type: string; payload: Object };
type Dispatch = (action: Action) => void;
export function getFakeData(){
    //const params = new URLSearchParams(props.location.search);
    //const foo = params.get('foo'); // bar
    return (dispatch:Dispatch, store:Object)=>{
        console.log(location.search);
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

export function redirectToValidPackage(){
    return (dispatch:Dispatch, store:Object)=>{
        browserHistory.push("/foo");
    };
}

export function getFHResults(){
    return (dispatch:Dispatch, store:Object)=>{

        axios.get(services.getFHResults)
        .then(axios.spread((res)=>{
            dispatch({
                type:actionTypes.GET_FH_RESULTS,
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

function handleGetFHData(state:types.State, action:types.Action){
    return update(state, {
        fhResults:{
            $set:action.payload
        }
    });
}

const ACTION_HANDLERS = {
    GET_FAKE_DATA:handleGetFakeData,
    GET_FH_RESULTS:handleGetFHData
};
const initialState = {
};

//type Reducer<S, A: types.Action> = (S, A) => S;

const homeReducer = (state:Object = initialState, action: Object) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
};

export default homeReducer;