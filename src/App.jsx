import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Button from './button';
import Container from './conteiner';
import Header from './Header';
import Footer from './Footer';
import { ThemeProvider } from './ThemeContext';
import './App.css';
import Content from './Content';
import RegistrationForm from './RegistrationForm';
import Table from './table';

function App() {
  const columns = [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Age',
      accessor: 'age',
    },
    {
      Header: 'Country',
      accessor: 'country',
    },
  ];

  const data = [
    { name: 'Alice', age: 28, country: 'USA' },
    { name: 'Bob', age: 35, country: 'Canada' },
    { name: 'Charlie', age: 42, country: 'UK' },
  ];

  return (
    <ThemeProvider>
      <Router>
        <div>
          <Header>Мои лабораторные работы!</Header>
          <RegistrationForm />
          <Content />
          <Table columns={columns} data={data} /> {/* Добавляем компонент Table с данными */}
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