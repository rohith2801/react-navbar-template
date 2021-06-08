import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector } from 'react-redux';
import { Backdrop } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			'& > * + *': {
				marginLeft: theme.spacing(2),
			},
		},
		backdrop: {
			zIndex: theme.zIndex.drawer + 1,
			color: '#fff',
		},
	}),
);

export default function ProgressBar() {
	const progressState = useSelector((state:any) => state.progress);
	const { loading } = progressState;
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Backdrop className={classes.backdrop} open={loading}>
			<CircularProgress style={{ margin: '10px auto' }} />
			</Backdrop>
		</div>
	);
}
