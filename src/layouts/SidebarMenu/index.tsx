import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import { Button } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { ButtonProps } from '@mui/material/Button';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import { NavLink, useHistory, useLocation } from 'react-router-dom';

const drawerWidth = 240;

const menuItems = [
  {
    text: 'Painel',
    icon: <BarChartOutlinedIcon style={{ width: '24px', height: '24px' }} />,
  },
  {
    text: 'Caixa',
    icon: <ReceiptLongOutlinedIcon style={{ width: '24px', height: '24px' }} />,
  },
  {
    text: 'Estoque',
    icon: <Inventory2OutlinedIcon style={{ width: '24px', height: '24px' }} />,
  },
  {
    text: 'Carteira',
    icon: (
      <AccountBalanceWalletOutlinedIcon
        style={{ width: '24px', height: '24px' }}
      />
    ),
  },
  {
    text: 'Funcionarios',
    icon: <BadgeOutlinedIcon style={{ width: '24px', height: '24px' }} />,
  },
];

interface StyledButtonProps extends ButtonProps {
  pageSelected?: boolean;
}

const StyledListItem = styled(ListItem)(({ theme }) => ({
  '&.Mui-selected': {
    backgroundColor: theme.palette.primary.main,
  },
}));

const StyledLink = styled(NavLink)({
  textDecoration: 'none',
  color: 'inherit',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

const StyledButton = styled(Button)<StyledButtonProps>(
  ({ theme, pageSelected }) => ({
    'backgroundColor': pageSelected ? '#292929' : 'white',
    '& svg': {
      color: pageSelected ? 'white' : '#292929', // Color of the icon
    },
    '& h4': {
      color: pageSelected ? 'white' : '#292929', // Color of the text
      fontWeight: 100,
      fontSize: 16,
    },
  })
);

export const SidebarMenu = () => {
  const history = useHistory();
  const location = useLocation();
  // const { isUserAdmin } = useCurrentUser();
  const [selectedPage, setSelectedPage] = useState('Painel'); // Default selected page

  const handlePageClick = (page: string) => {
    setSelectedPage(page);
    // You can add additional logic here, like navigation to the selected page
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* <CssBaseline /> */}

      <Drawer
        sx={{
          'width': drawerWidth,
          'flexShrink': 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <List>
          {menuItems.map(({ text, icon }) => (
            <StyledListItem
              key={text}
              disablePadding
              onClick={() => handlePageClick(text)}
            >
              <StyledLink
                to={`/${text.toLowerCase()}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <StyledButton
                  // component="label"
                  variant="sidebar"
                  startIcon={icon}
                  aria-label={text}
                  pageSelected={selectedPage === text}
                >
                  <h4 style={{ margin: '8px' }}>{text}</h4>
                </StyledButton>
              </StyledLink>
            </StyledListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
