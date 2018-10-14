import React, { Component } from 'react'
import BreadcrumbWithRoutes from './Breadcrumbs'
import TracebackBreadcrumb from './TracebackBreadcrumb'
import Search from './search/Search'

const BreadcrumbText = ({ match }) => match.params.menu

const routes = [
	{ path: '/home', breadcrumb: null },
	{ path: '/menu/:menu', breadcrumb: BreadcrumbText }
]

const Breadcrumbs = BreadcrumbWithRoutes(routes, {
	excludePaths: ['/', '/menu']
})
Breadcrumbs.displayName = 'Breadcrumbs'

export default class ControlPanel extends Component {
	render() {
		return (
			<div>
				<Breadcrumbs />
				<Search className="w-25" />
			</div>
		)
	}
}
