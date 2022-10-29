import React from 'react'
import style from './Form.module.css'

export const Form = ({ date, setDate, setMessage }) => {
  const { text, author } = date

  const sendForm = (e) => {
    e.preventDefault()
    if (text.length > 0) {
      setMessage((prevstate) => [...prevstate, { text, author }])
    }
    setDate({
      text: '',
      author: '',
    })
  }
  return (
    <form onSubmit={sendForm} className={style.form}>
      <input
        placeholder="Name"
        value={author}
        onChange={(e) => {
          setDate((prevstate) => ({ ...prevstate, author: e.target.value }))
        }}
      />
      <input
        placeholder="Text"
        value={text}
        onChange={(e) =>
          setDate((prevstate) => ({ ...prevstate, text: e.target.value }))
        }
      />
      <button type="submit"> Send </button>
    </form>
  )
}

export default Form
