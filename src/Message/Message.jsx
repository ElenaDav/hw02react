import React from 'react'
import style from './Message.module.css'

export const Message = ({ name }) => {
  return (
    <div className={style.message}>
      <p>Message from {name}</p>
    </div>
  )
}
