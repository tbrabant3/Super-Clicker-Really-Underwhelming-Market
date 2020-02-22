import {
	ADD_NEW_UPGRADE,
	INCREMENT_COUPON_COUNT,
	REMOVE_UPGRADE
} from './actions';

export const incrementCouponCount = () => ({
	type: INCREMENT_COUPON_COUNT
});

export const addUpgrade = ({ upgrade, amount }) => ({
	type: ADD_NEW_UPGRADE,
	upgrade,
	amount
});

export const removeUpgrade = ({ upgrade, amount }) => ({
	type: REMOVE_UPGRADE,
	upgrade,
	amount
});
