import update from "react-addons-update";
import constants from "./actionConstants";
import axios from "axios";
//Import constants
const {
    GET_FAKE_DATA
} = constants;
//=====================================
//Action Creators
//=====================================

const BACKEND_URL = "https://pixabay.com/api/?key=5701538-da0313fec5db349435216f7c3&q=hotels&image_type=photo";

export function getFakeData() {
    return (dispatch, store)=>{
        axios.get(BACKEND_URL)
        .then((res)=>{
            dispatch({
                type:GET_FAKE_DATA,
                payload:res.data
            });
        })
        .catch((err)=>{
            console.log(err);
        });
    };
}

//======================================
//Action Handlers / Reducers
//======================================
function handleGetFakeData(state, action){
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
    showPanel:{},
    name:"Eman"
};
const homeReducer = (state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
};

export default homeReducer;