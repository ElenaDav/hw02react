import { useState, useEffect } from 'react'
import './App.css'
import Form from './Form/Form'
import { Message } from './Message/Message'

function App() {
  //Добавить в компонент App поле стейта messageList
  const [messageList, setMessageList] = useState([])
  // В нем хранить массив объектов - сообщений (объект должен содержать,
  // как минимум, поля text и author). Начальное значение - пустой массив)
  const [messageBody, setMessageBody] = useState({
    text: '',
    author: '',
  })

  const botAnswer = 'Your message was sent by robot'

  useEffect(() => {
    if (messageList.length > 0) {
      setTimeout(() => {
        setMessageList((prevstate) => [...prevstate, { text: botAnswer }])
      }, 1000)
    }
  }, [messageList])

  return (
    <div className="App">
      <Form
        date={messageBody}
        setDate={setMessageBody}
        setMessage={setMessageList}
      >
        {' '}
      </Form>
      <div>
        {/* Рендерить список сообщений через map */}
        {messageList.map((item, index) => (
          <Message text={item.text} author={item.author} key={index} />
        ))}
      </div>
    </div>
  )
}

export default App
