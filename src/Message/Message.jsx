import React from 'react'
import style from './Message.module.css'

export const Message = ({ messages }) => {
  return (
    <div className={style.message}>
      {messages.map((message, index) => (
        <p key={index}>
          {message.author}: {message.text}{' '}
        </p>
      ))}
      {/* <p>
        Message {text} from {author}
      </p> */}

      <ul>{/* Рендерить список сообщений через map */}</ul>
    </div>
  )
}
