/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import * as popupActions from './actions';
import { useSelector, useDispatch } from 'react-redux';
function AssertionPopup() {
	const popup = useSelector((state:any) => state.popup);
	const dispatch = useDispatch();
	const { message, open } = popup;
	//const { message, title, handleYes, handleNo, visibility } = props;
	return (
		<Dialog
			open={open}
			onClose={() => dispatch(popupActions.handlePopup('disagree'))}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description">
			<DialogTitle id="alert-dialog-title">Confirmation</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert message">{message}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={() => dispatch(popupActions.handlePopup('disagree'))} color="primary">
					Disagree
				</Button>
				<Button
					onClick={() => dispatch(popupActions.handlePopup('agree'))}
					color="primary"
					autoFocus>
					Agree
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default AssertionPopup;

AssertionPopup.propTypes = {
	message: PropTypes.string,
	title: PropTypes.string,
	handleYes: PropTypes.func,
	handleNo: PropTypes.func,
	visibility: PropTypes.bool,
};

AssertionPopup.defaultProps = {
	message: '',
	title: '',
	handleYes: () => {},
	handleNo: () => {},
	visibility: false,
};
