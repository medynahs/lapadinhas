import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

const Add = () => {
  console.log('loaded page add');
  const [cliente, setCliente] = useState({
    duration: '',
    date: '',
    period: '',
    typeOfPayment: '',
    discount: '',
    roomNumber: '',
    typeOfRoom: '',
    totalPrice: '',
    age: '',
    nationality: '',
  });
  const [error, setError] = useState(false);

  // const navigate = useNavigate();

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setCliente((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e: { preventDefault: () => void }) => {
    console.log(cliente);
    const updatedCliente = {
      ...cliente,
      age: parseInt(cliente.age),
      roomNumber: parseInt(cliente.roomNumber),
    };

    console.log(updatedCliente);
    e.preventDefault();
    try {
      await axios.post('http://localhost:8800/clientes', updatedCliente);
      // navigate('/');
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <S.FormContainer>
      <h1>Add New cliente</h1>

      <input
        type="text"
        placeholder="cliente duration"
        name="duration"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="cliente date"
        name="date"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="cliente period"
        name="price"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="cliente typeOfPayment"
        name="typeOfPayment"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="cliente discount"
        name="discount"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="cliente roomNumber"
        name="roomNumber"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="cliente typeOfRoom"
        name="typeOfRoom"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="cliente totalPrice"
        name="totalPrice"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="cliente age"
        name="age"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="cliente nationality"
        name="nationality"
        onChange={handleChange}
      />

      <button onClick={handleClick}>Add</button>
      {error && 'Something went wrong!'}

      <Link to="/">See all clientes</Link>
    </S.FormContainer>
  );
};

export { Add };
