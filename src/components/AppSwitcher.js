import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class AppSwitcher extends React.Component {
	render() {
		const menus = this.props.menus

		return (
			<div className="gom_apps">
				{menus.map(menu => (
					<Link key={menu.id} className="gom_app" to={menu.url}>
						{menu.name}
					</Link>
				))}
			</div>
		)
	}
}

AppSwitcher.defaultProps = {
	menus: []
}

AppSwitcher.propTypes = {
	menus: PropTypes.array.isRequired
}

export default AppSwitcher
