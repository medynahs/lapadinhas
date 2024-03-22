import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { UtilityMenu } from 'components/UtilityMenu';
import { SidebarMenu } from 'layouts/SidebarMenu';
import { ReactNode } from 'react';
/**
 * Dashboard layout
 */
interface Props {
  children?: ReactNode;
}

export const Dashboard = ({ children }: Props) => {
  console.log('loading dashboard');
  const theme = useTheme();

  return (
    <Stack direction="row">
      <SidebarMenu />
      <Stack
        direction="column"
        flexGrow={1}
        minHeight="100vh"
      >
        <Stack direction="row" paddingRight={3} justifyContent="end">
          <UtilityMenu />
        </Stack>
        <Paper
          square
          direction="column"
          flexGrow={1}
          component={Stack}
          elevation={0}
          sx={{
            borderRadius: 0,
            bgcolor: theme.palette.background.paper,
            overflow: 'hidden',
          }}
        >
          {children}
        </Paper>
      </Stack>
    </Stack>
  );
};
