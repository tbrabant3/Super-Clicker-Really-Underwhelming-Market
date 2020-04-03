import { combineReducers } from 'redux';
import CouponsReducer from './coupons';
import UpgradesReducer from './upgrades';
import CPSReducer from './coupons-per-second';
import ThemeReducer from './header';

export default combineReducers({
	CouponsReducer,
	UpgradesReducer,
	CPSReducer,
	ThemeReducer
});
