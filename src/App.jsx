import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Button from './button';
import Container from './conteiner';
import Header from './Header';
import Footer from './Footer';
import { ThemeProvider } from './ThemeContext';
import './App.css';
import Content from './Content';
import RegistrationForm from './RegistrationForm';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div>
          <Header>Мои лабораторные работы!</Header>
          <RegistrationForm />
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