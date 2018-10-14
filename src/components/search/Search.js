import React, { Component } from 'react'
import SearchInput from './SearchInput'
import FilterButton from './FilterButton'
import Favorites from './Favorites'

import classNames from 'classnames'

export default class Search extends Component {
	render() {
		const { className } = this.props
		const classes = classNames(className, 'input-group')
		return (
			<div {...this.props} className={classes}>
				<div className="input-group-prepend">
					<FilterButton />
				</div>
				<SearchInput />
				<div className="input-group-append">
					<Favorites />
				</div>
			</div>
		)
	}
}
