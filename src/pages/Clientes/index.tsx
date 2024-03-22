import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { transformDate } from 'hooks/transformDate';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { TablePagination } from '@mui/material';

const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
      <Paper>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Matrícula</TableCell>
                <TableCell align="center">Data</TableCell>
                <TableCell align="center">Duração(h)</TableCell>
                <TableCell align="center">Período do dia</TableCell>
                <TableCell align="center">Número do quarto</TableCell>
                <TableCell align="center">Tipo de quarto</TableCell>
                <TableCell align="center">Forma de pagamento</TableCell>
                <TableCell align="center">Desconto</TableCell>
                <TableCell align="center">Preço Total</TableCell>
                <TableCell align="center">Editar</TableCell>
                <TableCell align="center">Deletar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {clientes?.map(
                (cliente: {
                  id: number;
                  date: string;
                  duration: string;
                  period: string;
                  roomNumber: number;
                  typeOfRoom: string;
                  typeOfPayment: string;
                  discount: string;
                  totalPrice: string;
                }) => (
                  <TableRow
                    key={cliente.date}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {cliente.id}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {transformDate(cliente.date)}
                    </TableCell>
                    <TableCell align="center">{cliente.duration}</TableCell>
                    <TableCell align="center">{cliente.period}</TableCell>
                    <TableCell align="center">{cliente.roomNumber}</TableCell>
                    <TableCell align="center">{cliente.typeOfRoom}</TableCell>
                    <TableCell align="center">
                      {cliente.typeOfPayment}
                    </TableCell>
                    <TableCell align="center">{cliente.discount}</TableCell>
                    <TableCell align="center">{cliente.totalPrice}</TableCell>
                    <TableCell align="center">
                      <Link
                        to={`/update/${cliente.id}`}
                        style={{ color: 'inherit', textDecoration: 'none' }}
                      >
                        <EditIcon />
                      </Link>
                    </TableCell>
                    <TableCell align="center">
                      <DeleteIcon onClick={() => handleDelete(cliente.id)} />
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={clientes.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Paper>
    </div>
  );
};

export { Clientes };
