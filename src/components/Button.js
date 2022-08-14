import './Button.css'

import React from 'react'

const Button = ({symbol,color}) => {
  return (
    <div className='button-wrapper'style={{backgroundColor:color}}>{symbol}</div>
  )
}

export default Button
