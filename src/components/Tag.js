import React from 'react'

export default ({ tag: Tag, ...attributes }) => {
	if (Tag == null) {
		const { children, ...attrs } = attributes
		const childrenWithProps = React.Children.map(children, child =>
			React.cloneElement(child, attrs)
		)
		return <>{childrenWithProps}</>
	}
	return <Tag {...attributes} />
}
