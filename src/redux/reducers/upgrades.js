import { ADD_NEW_UPGRADE, REMOVE_UPGRADE } from '../actions/actions';
import {
	UPGRADE_COUPON_BOOK,
	UPGRADE_COUPON_FACTORY,
	UPGRADE_COUPON_PRINTER,
	UPGRADE_COUPON_STAMP,
	UPGRADE_COUPON_STORE
} from '../../constants/upgrades';

const initialState = {
	upgrades: {
		[UPGRADE_COUPON_BOOK]: 0,
		[UPGRADE_COUPON_STAMP]: 0,
		[UPGRADE_COUPON_PRINTER]: 0,
		[UPGRADE_COUPON_STORE]: 0,
		[UPGRADE_COUPON_FACTORY]: 0
	}
};

const UpgradesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_NEW_UPGRADE:
			return {
				...state,
				upgrades: {
					...state.upgrades,
					[action.upgrade]: state.upgrades[action.upgrade] + action.amount
				}
			};

		case REMOVE_UPGRADE:
			return {
				...state,
				upgrades: {
					...state.upgrades,
					[action.upgrade]: state.upgrades[action.upgrade] - action.amount
				}
			};
		default:
			return state;
	}
};

export default UpgradesReducer;
