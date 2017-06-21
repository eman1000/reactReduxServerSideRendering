
import request from '../util/request';
import axios from "axios";
const BACKEND_URL = 'https://reqres.in/api/users';

export function getFakeData() {
	return(dispatch, store)=>{
		request.get(BACKEND_URL)
		.finish((error, res)=>{
			dispatch({
				type:"GET_FAKE_DATA",
				payload:res.body
			});
		});
	};
}
export function setName(){
	return {
		type:"SET_NAME",
		payload:"Eman"
	};
}