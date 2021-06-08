import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { sendSnackbarClear } from './actions';
function Alert(props:any) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function AlertBox() {
	const errorState = useSelector((state:any) => state.errorHandler);
	const { type, message, open } = errorState;
	const dispatch = useDispatch();

	const handleClose = () => {
		dispatch(sendSnackbarClear());
	};
	return (
		<Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
			<Alert severity={type}>{message}</Alert>
		</Snackbar>
	);
}

export default AlertBox;

AlertBox.propTypes = {
	message: PropTypes.string,
	shouldOpen: PropTypes.bool,
	type: PropTypes.string,
};

AlertBox.defaultProps = {
	message: '',
	shouldOpen: false,
	type: 'success',
};
