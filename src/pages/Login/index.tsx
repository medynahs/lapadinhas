import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {
  return (
    <Box p={30}>
      <Typography
        style={{ fontFamily: 'Julius Sans One', fontWeight: 400 }}
        variant="h4"
        fontWeight="bold"
      >
        Login
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        pl={30}
        pr={30}
        pt={4}
        pb={6}
      >
        <TextField id="login-email" label="Email" variant="outlined" />
        <TextField id="login-senha" label="Senha" variant="outlined" />
      </Box>
      <Box pl={30} pr={30}>
        <Button
          fullWidth
          variant="contained"
          style={{ backgroundColor: 'black', padding: '12px' }}
        >
          Entrar
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
