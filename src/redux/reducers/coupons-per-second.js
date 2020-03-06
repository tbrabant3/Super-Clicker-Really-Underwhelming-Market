import { SET_COUPONS_PER_SECOND } from '../actions/actions';

const initialState = { coupons_per_second: 0 };

const CPSReducer = (state = initialState, action) => {
	if (action.type === SET_COUPONS_PER_SECOND) {
		return {
			...state,
			coupons_per_second: (state.coupons_per_second = action.amount)
		};
	} else {
		return state;
	}
};

export default CPSReducer;
