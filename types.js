// @flow
import { intlFormat } from "react-intl";
export type State = {
	dummyData: Object
};
export type HomeProps = {
	dummyData:{
		results:Array<{first:string, picture:{large:string}}>,
	},
	locale:Object,
	messages:Object,
	getFakeData:Function,
	intl:intlFormat
};


export type CommonProps = {
	intl:{
		messages:{
			[key: string]:string
		};
	}
};
export type Action =
    { type: 'GET_FAKE_DATA', payload: Object}
  ;
export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;
export type GetState = () => Object;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;