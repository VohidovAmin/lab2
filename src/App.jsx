import { useState } from 'react'
import Button from './button'
import Conteiner from './conteiner'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header>
        Мои лабораторные работы!
        </Header>
        <Menu/>
      <Conteiner> 
      <Button onClick={()=>alert("мой текст")} label={"Увеличить"}/>
      <Button onClick={()=>alert("мой код")} label={"Уменьшить"}/>
      <Button onClick={()=>alert("моя страница")} label={"Умножить"}/>
      </Conteiner>
      <Footer>
      Вохидов А.А
      </Footer>
    </>
  )
}

export default App
