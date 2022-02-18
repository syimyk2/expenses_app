import React from 'react'

const Button = (props) => {
  return (
    <button id={props.id} onClick={props.onClick}>{props.children}</button>
  )
}

export default Button