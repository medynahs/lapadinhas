import LogoutIcon from '@mui/icons-material/Logout';
import Link from '@mui/material/Link';
// import { useOktaAuth } from '@okta/okta-react';
// import { clearLocalStorage } from 'utils/localStorage';

interface Props {
  isIcon?: boolean;
}

export const Logout = ({ isIcon }: Props) => {
//   const { oktaAuth } = useOktaAuth();

  const onLogout = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    // e.preventDefault();
    // clearLocalStorage();
    // await oktaAuth.signOut();

    // LOG OUT FUNCTION
  };

  return (
    <Link href="/" onClick={onLogout}>
      {isIcon ? (
        <LogoutIcon sx={{ color: 'white.main', fontSize: 50 }} />
      ) : (
        'Logout'
      )}
    </Link>
  );
};
