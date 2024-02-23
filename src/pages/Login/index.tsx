import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface Props {
  children?: React.ReactNode;
}

const Login = ({ children }: Props) => {
  return (
    <Box pl={2}>
      <Typography variant="h4" fontWeight="bold">
        Log in
      </Typography>
    </Box>
  );
};

export default Login;
