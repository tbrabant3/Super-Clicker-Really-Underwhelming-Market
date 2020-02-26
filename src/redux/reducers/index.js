import { combineReducers } from 'redux';
import CouponsReducer from './coupons';
import UpgradesReducer from './upgrades';

export default combineReducers({
	CouponsReducer,
	UpgradesReducer
});
