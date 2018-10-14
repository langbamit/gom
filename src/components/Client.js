import React from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'
import AppSwitcher from './AppSwitcher'
import App from './App'
import Navbar from './Navbar'

import Router from './Router'

import ControlPanel from './ControlPanel'
import createHashHistory from 'history/createHashHistory'

class Client extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			menus: [],
			history: createHashHistory({
				hashType: 'noslash' // Omit the leading slash
			})
		}
	}

	componentDidMount() {
		fetch('http://localhost:3000/menus')
			.then(response => response.json())
			.then(menus => this.setState({ menus: menus }))
		this.state.history.listen(location => {
			console.log(location.pathname)
		})
	}

	render() {
		return (
			<Router history={this.state.history}>
				<>
					<Navbar />
					<main className="main_content container-fluid">
						<ControlPanel />
						<Switch>
							<Route
								exact
								path="/home"
								render={props => (
									<AppSwitcher {...props} menus={this.state.menus} />
								)}
							/>
							<Route
								path="/menu/:menu"
								render={props => <App {...props} menus={this.state.menus} />}
							/>
							<Redirect from="/" to="/home" />
						</Switch>
					</main>
				</>
			</Router>
		)
	}
}

export default Client
