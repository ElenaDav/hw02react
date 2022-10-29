import React from 'react'
import style from './Message.module.css'

export const Message = ({ author, text }) => {
  return (
    <div className={style.message}>
      <p>
        Message {text} from {author}
      </p>
    </div>
  )
}
