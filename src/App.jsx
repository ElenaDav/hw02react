import { useState, useEffect } from 'react'
import './App.css'
import Form from './Form/Form'
import { Message } from './Message/Message'

function App() {
  //Добавить в компонент App поле стейта messageList
  const [messageList, setMessageList] = useState([])
  // В нем хранить массив объектов - сообщений (объект должен содержать,
  // как минимум, поля text и author). Начальное значение - пустой массив)

  const addMessage = (newMessage) => {
    setMessageList((prevMessageList) => [...prevMessageList, newMessage])
  }
  const botAnswer = 'Your message was sent by robot'

  useEffect(() => {
    if (
      messageList.length > 0 &&
      messageList[messageList.length - 1].author === 'user'
    ) {
      setTimeout(() => {
        addMessage({
          author: 'BOT',
          text: botAnswer,
        })
      }, 1000)
    }
  }, [messageList])

  return (
    <div className="App">
      <Form addMessage={addMessage} />
      <Message messages={messageList} />
    </div>
  )
}

export default App
