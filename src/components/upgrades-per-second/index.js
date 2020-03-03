import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addCouponAmount } from '../../redux/actions';
import * as Upgrades from '../../constants/upgrades';

const mapStateToProps = state => {
	return {
		books: state.UpgradesReducer.upgrades[Upgrades.UPGRADE_COUPON_BOOK],
		stamps: state.UpgradesReducer.upgrades[Upgrades.UPGRADE_COUPON_STAMP],
		printers: state.UpgradesReducer.upgrades[Upgrades.UPGRADE_COUPON_PRINTER],
		store: state.UpgradesReducer.upgrades[Upgrades.UPGRADE_COUPON_STORE],
		factory: state.UpgradesReducer.upgrades[Upgrades.UPGRADE_COUPON_FACTORY],
		corporation:
			state.UpgradesReducer.upgrades[Upgrades.UPGRADE_COUPON_CORPORATION]
	};
};

const IncreaseOverTime = ({
	dispatch,
	books,
	stamps,
	printers,
	store,
	factory,
	corporation
}) => {
	useEffect(() => {
		const timer = setInterval(
			() =>
				dispatch(
					addCouponAmount({
						amount:
							books * Upgrades.UPGRADE_COUPON_BOOK_ADDS +
							stamps * Upgrades.UPGRADE_COUPON_STAMP_ADDS +
							printers * Upgrades.UPGRADE_COUPON_PRINTER_ADS +
							store * Upgrades.UPGRADE_COUPON_STORE_ADDS +
							factory * Upgrades.UPGRADE_COUPON_FACTORY_ADDS +
							corporation * Upgrades.UPGRADE_COUPON_CORPORATION_ADDS
					})
				),
			500
		);
		return () => clearTimeout(timer);
	});

	return null;
};

export default connect(mapStateToProps)(IncreaseOverTime);
