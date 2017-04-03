import React, { PropTypes } from 'react'
import styles from './styles.css'

const KeyboardNavItem = ({ tagName, ...props }) => {
  let className = styles.item
  className += props.className ? ` ${props.className}` : ''
  const onSelect = props.onSelect || (() => {})
  const onClick = onSelect
  const onKeyDown = (event) => {
    if (props.onKeyDown) {
      props.onKeyDown(event)
    }
    if (event.defaultPrevented) {
      return
    }
    if (event.keyCode === 13) {
      // Select by "enter"
      onSelect()
    }
    if (event.keyCode === 79 && (event.metaKey || event.ctrlKey)) {
      // Select by cmd/ctrl+o
      onSelect()
    }
  }
  const itemProps = {
    className,
    onClick,
    onKeyDown,
    tabIndex: 0,
  }
  const TagName = tagName || 'div'
  return (
    <TagName {...props} {...itemProps} />
  )
}

KeyboardNavItem.propTypes = {
  className: PropTypes.string,
  tagName: PropTypes.string,
  onSelect: PropTypes.func,
  onKeyDown: PropTypes.func,
}

export default KeyboardNavItem
