import React, { useState } from 'react'
import style from './Form.module.css'

export const Form = ({ addMessage }) => {
  const [author, setAuthor] = useState('')
  const [text, setText] = useState('')

  const sendForm = (e) => {
    e.preventDefault()
    // if (text.length > 0) {
    //   setMessage((prevstate) => [...prevstate, { text, author }])
    // }
    addMessage({
      author: 'user',
      text,
    })

    // setDate('')
  }

  return (
    <form onSubmit={sendForm} className={style.form}>
      <input
        placeholder="Name"
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        placeholder="Text"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit"> Send </button>
    </form>
  )
}

export default Form
