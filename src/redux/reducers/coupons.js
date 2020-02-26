import {
	ADD_COUPON_AMOUNT,
	INCREMENT_COUPON_COUNT,
	SUBTRACT_COUPON_AMOUNT
} from '../actions/actions';

const initialState = { coupons: 0 };

const CouponsReducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT_COUPON_COUNT:
			return { ...state, coupons: state.coupons + 1 };
		case ADD_COUPON_AMOUNT:
			return { ...state, coupons: state.coupons + action.amount };
		case SUBTRACT_COUPON_AMOUNT:
			return { ...state, coupons: state.coupons - action.amount };
		default:
			return state;
	}
};

export default CouponsReducer;
