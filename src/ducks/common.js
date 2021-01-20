import { INITIAL_DATA } from '../actionTypes/common';
const initialState = {};
export default function reducer(state = initialState, action) {
	switch (action.type) {
		case INITIAL_DATA:
			return state;
		default:
			return state;
	}
}