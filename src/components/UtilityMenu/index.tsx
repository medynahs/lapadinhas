import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import { Toolbar, Button } from '@mui/material';

export const UtilityMenu = () => {
  const handleClick = () => {
    console.log('utility menu');
  };

  return (
    <Toolbar sx={{ gap: 2 }}>
      <Button
        color="primary"
        size="large"
        startIcon={<AccountCircleOutlined />}
        onClick={() => {}}
      >
        Hello, username Wander
      </Button>
    </Toolbar>
  );
};
