
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from '../modules/app/components';

class Root extends Component {
	render() {
		return (
			<Provider store={this.props.store}>
				<BrowserRouter>
					<Switch>
						<Route path='/' component={App} />
					</Switch>
				</BrowserRouter>
			</Provider>
		);
	}
}

Root.propTypes = {
	store: PropTypes.object
};

export default connect(null,null)(Root);
