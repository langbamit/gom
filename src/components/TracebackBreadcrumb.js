import React, { Component, createElement } from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { withRouter } from 'react-router'
import { NavLink as RouterLink } from 'react-router-dom'

class TracebackBreadcrumb extends Component {
	constructor(props) {
		super(props)
		this.state = {
			stack: []
		}
	}

	reset() {
		this.setState({
			stack: []
		})
	}

	push(item) {
		this.setState(prev => ({
			stack: [...prev.stack, item]
		}))
	}

	pop() {
		this.setState(prev => {
			let new_stack = [...prev.stack]
			new_stack.pop()
			return {
				stack: new_stack
			}
		})
	}

	getBreadcrumbs() {
		return this.state.stack.map((value, index) => {
			const componentProps = { url: value.path, key: index }
			return createElement('span', componentProps, value.name)
		})
	}

	render() {
		const breadcrumbs = this.getBreadcrumbs()
		return (
			<Breadcrumb>
				{breadcrumbs.map((breadcrumb, index) => {
					if (index < breadcrumbs.length - 1) {
						return (
							<BreadcrumbItem key={breadcrumb.key}>
								<RouterLink to={breadcrumb.props.url}>{breadcrumb}</RouterLink>
								{/* {(index < breadcrumbs.length - 1) && <i> / </i>} */}
							</BreadcrumbItem>
						)
					} else {
						return <BreadcrumbItem active>{breadcrumb}</BreadcrumbItem>
					}
				})}
			</Breadcrumb>
		)
	}
}

export default withRouter(TracebackBreadcrumb)
