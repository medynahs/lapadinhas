import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Clientes = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const fetchAllClientes = async () => {
      try {
        const res = await axios.get('http://localhost:8800/clientes');
        setClientes(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllClientes();
  }, []);

  console.log(clientes);

  const handleDelete = async (id: any) => {
    try {
      await axios.delete(`http://localhost:8800/clientes/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Lapada</h1>
      <div className="clientes">
        {clientes?.map((cliente: any) => (
          <div key={cliente.id} className="cliente">
            <p>{cliente.duration}</p>
            <p>{cliente.date}</p>
            <p>{cliente.period}</p>
            <p>{cliente.typeOfPayment}</p>
            <p>{cliente.discount}</p>
            <p>{cliente.roomNumber}</p>
            <p>{cliente.typeOfRoom}</p>
            <p>{cliente.totalPrice}</p>
            <p>{cliente.age}</p>
            <p>{cliente.nationality}</p>

            <button className="delete" onClick={() => handleDelete(cliente.id)}>
              Delete
            </button>
            <button className="update">
              <Link
                to={`/update/${cliente.id}`}
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                Update
              </Link>
            </button>
          </div>
        ))}
      </div>

      <button className="addHome">
        <Link to="/add" style={{ color: 'inherit', textDecoration: 'none' }}>
          Add new cliente
        </Link>
      </button>
    </div>
  );
};

export default Clientes;
