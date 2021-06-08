import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import errorBanner from '../images/errorBanner.jpg'
export class BaseErrorBoundry extends Component {
	constructor() {
		super();

		this.state = {
			hasError: false,
		};
	}
	static getDerivedStateFromError() {
		return {
			hasError: true,
		};
	}
	componentDidCatch(error, info) {
		console.error(error);
		console.error(info);
	}
	render() {
		if (this.state.hasError) {
			return (
				<Container fixed>
					<img src={errorBanner} alt="error banner" />
				</Container>
			);
		}
		return this.props.children;
	}
}

export default BaseErrorBoundry;
