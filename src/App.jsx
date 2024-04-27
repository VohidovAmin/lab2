import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Button from './button';
import Container from './conteiner';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import { ThemeProvider } from './ThemeContext';
import './App.css';
import Content from './Content'; 
import RegistrationForm from './RegistrationForm';
import axios from 'axios'; 

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div>
          <Header>Мои лабораторные работы!</Header>
          <RegistrationForm />
          <Menu />
          <Content />  
              <Container>
                <Button onClick={() => alert("мой текст")} label={"Увеличить"} />
                <Button onClick={() => alert("мой код")} label={"Уменьшить"} />
                <Button onClick={() => alert("моя страница")} label={"Умножить"} />
              </Container>
          <Footer>Вохидов А.А</Footer>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;