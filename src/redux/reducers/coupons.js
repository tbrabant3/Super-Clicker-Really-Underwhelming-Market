import { INCREMENT_COUPON_COUNT } from '../actions/actions';

const initialState = { coupons: 0 };

const CouponsReducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT_COUPON_COUNT:
			return { ...state, coupons: state.coupons + 1 };
		default:
			return state;
	}
};

export default CouponsReducer;
