import './styles.css';

import { Routes, Route } from 'react-router-dom';

import Clientes from 'pages/Clientes';
import Add from 'pages/Add/Add';
import Update from 'pages/Update';
import Login from 'pages/Login';

const Content = () => {
  return (
    <main className="Content">
      <Routes>
        <Route path="/" element={<Clientes />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
};

export { Content };
