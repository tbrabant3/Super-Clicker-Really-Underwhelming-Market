import {
	ADD_COUPON_AMOUNT,
	ADD_NEW_UPGRADE,
	INCREMENT_COUPON_COUNT,
	REMOVE_UPGRADE,
	SUBTRACT_COUPON_AMOUNT
} from './actions';

export const incrementCouponCount = () => ({
	type: INCREMENT_COUPON_COUNT
});

export const subtractCouponAmount = ({ amount }) => ({
	type: SUBTRACT_COUPON_AMOUNT,
	amount
});

export const addCouponAmount = ({ amount }) => ({
	type: ADD_COUPON_AMOUNT,
	amount
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
