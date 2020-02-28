import { ADD_NEW_UPGRADE, REMOVE_UPGRADE } from '../actions/actions';
import * as Upgrades from '../../constants/upgrades';

const initialState = {
	upgrades: {
		[Upgrades.UPGRADE_COUPON_BOOK]: 0,
		[Upgrades.UPGRADE_COUPON_STAMP]: 0,
		[Upgrades.UPGRADE_COUPON_PRINTER]: 0,
		[Upgrades.UPGRADE_COUPON_STORE]: 0,
		[Upgrades.UPGRADE_COUPON_FACTORY]: 0,
		[Upgrades.UPGRADE_COUPON_CORPORATION]: 0,
		[Upgrades.UPGRADE_RUSTY_SCISSORS]: 0,
		[Upgrades.UPGRADE_GOOD_SCISSORS]: 0,
		[Upgrades.UPGRADE_AMBIDEXTROUS_SCISSORS]: 0,
		[Upgrades.UPGRADE_INDUSTRIAL_SCISSORS]: 0,
		[Upgrades.UPGRADE_CEREMONIAL_SCISSORS]: 0,
		[Upgrades.UPGRADE_SLIGHT_MAGIC_SCISSORS]: 0,
		[Upgrades.UPGRADE_MYTHICAL_SCISSORS]: 0
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
