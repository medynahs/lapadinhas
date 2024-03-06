import { Routes, Route } from 'react-router-dom';

import Clientes from 'pages/Clientes';
import Add from 'pages/Add/Add';
import Update from 'pages/Update';
import Login from 'pages/Login';
import { Container } from './styles';

const Content = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Clientes />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Container>
  );
};

export { Content };
