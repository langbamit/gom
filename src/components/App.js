import React from 'react'

import Sidebar from './Sidebar'
class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			showSidebar: props.menus.length > 0
		}
	}

	render() {
		return (
			<>
				<Sidebar menus={this.props.menus} />
				<div className="application">
					<div>{this.props.match && this.props.match.params.menu}</div>
				</div>
			</>
		)
	}
}

App.defaultProps = {
	menus: []
}

export default App
