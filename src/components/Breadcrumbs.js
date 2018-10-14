import React from 'react'
import { NavLink } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { matchPath, withRouter } from 'react-router'

import withBreadcrumbs from 'react-router-breadcrumbs-hoc'
// const getBreadcrumbs = ({routes, location, options}) => {

// }

// const flattenRoutes = routes => routes.reduce((arr, route) => {
//   if (route.routes) {
//     return arr.concat([route, ...flattenRoutes(route.routes)]);
//   }
//   return arr.concat(route);
// }, []);

// export default (routes, options=[]) => Component => withRouter(props => React.createElement(Component, {
// 	...props,
// 	breadcrumbs: getBreadcrumbs({
//     routes: flattenRoutes(routes),
//     location: props.location,
//     options,
//   }),
// }))

const Breadcrumbs = ({ breadcrumbs }) => {
	const getChild = (breadcrumb, index) => {
		if (index != breadcrumbs.length - 1) {
			return <NavLink to={breadcrumb.props.match.url}>{breadcrumb}</NavLink>
		} else {
			return breadcrumb
		}
	}

	return (
		<Breadcrumb>
			{breadcrumbs.map((breadcrumb, index) => (
				<BreadcrumbItem active={index == breadcrumbs.length - 1}>
					{getChild(breadcrumb, index)}
				</BreadcrumbItem>
			))}
		</Breadcrumb>
	)
}

export default (routes, options) =>
	withBreadcrumbs(routes, options)(Breadcrumbs)
