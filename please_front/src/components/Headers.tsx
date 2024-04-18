import Button from '@mui/material/Button';
import { useLocation } from "react-router-dom";
import Link from '@mui/material/Link';
import { Box } from '@mui/material';


function Header({ loggedIn, email, onSignOut }) {
  const location = useLocation();
  return (
    <div>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {loggedIn ? <p className="header__email">{email}</p> : null}
        {loggedIn ? (
          <Button onClick={onSignOut} variant="contained">
            Выйти
          </Button>
        ) : (
          <>
            {location.pathname === "/sign-in" ? (
              <Link href="/sign-up" variant="body2">
                {" Регистрация"}
              </Link>
            ) : (
              <Link href="/sign-in" variant="body2">
                {"Войти"}
              </Link>
            )}
          </>
        )}
      </Box>
    </div>
  );
}

export default Header;
