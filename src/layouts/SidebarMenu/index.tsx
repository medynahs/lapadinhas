import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';

const drawerWidth = 240;

const menuItems = [
  { text: 'Painel', icon: <InsertChartIcon style={{ color: 'black' }} /> },
  {
    text: 'Caixa',
    icon: <ReceiptLongOutlinedIcon style={{ color: 'black' }} />,
  },
  {
    text: 'Inventário',
    icon: <Inventory2OutlinedIcon style={{ color: 'black' }} />,
  },
  {
    text: 'Carteira',
    icon: <AccountBalanceWalletOutlinedIcon style={{ color: 'black' }} />,
  },
  {
    text: 'Funcionarios',
    icon: <BadgeOutlinedIcon style={{ color: 'black' }} />,
  },
];

export const SidebarMenu = () => {
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
            <ListItem
              key={text}
              disablePadding
              onClick={() => handlePageClick(text)}
              sx={{
                backgroundColor: selectedPage === text ? 'black' : 'inherit',
              }}
            >
              <ListItemButton
                component="a"
                selected={selectedPage === text}
                href={`/${text.toLowerCase()}`}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
