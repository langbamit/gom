import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink as RouteLink } from 'react-router-dom'

class Sidebar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isOpen: true
		}
	}

	render() {
		return (
			<div className="sidebar sticky-top sticky-offset">
				<div className="sidebar-header">
					<h5 className="pl-2">Menus</h5>
				</div>

				<Nav vertical pills className="sidebar-content">
					{this.props.menus.map(menu => (
						<NavItem key={menu.id}>
							<NavLink tag={RouteLink} href={menu.url} to={menu.url}>
								{menu.name} <FontAwesomeIcon icon="stroopwafel" />
							</NavLink>
						</NavItem>
					))}
				</Nav>
				<div className="sidebar-footer">Back to page</div>
			</div>
		)
	}
}

Sidebar.defaultProps = {
	menus: []
}

export default Sidebar
