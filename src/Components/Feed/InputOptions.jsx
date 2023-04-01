import React from 'react'
import inputOption from './InputOptions.module.css';

const InputOptions = ({ Icon, title, color }) => {
  return (
    <div className={inputOption.inputOption}>
        <Icon style={{color: color}}/>
        <h4>{title}</h4>

    </div>
  )
}

export default InputOptions