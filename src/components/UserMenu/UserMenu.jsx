import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/authOperations';
import { selectUsername } from 'redux/selectors';
import { useSelector } from 'react-redux';
import styles from '../UserMenu/UserMenu.module.css';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(151, 151, 151)',
    },
  },
});

export const UserMenu = () => {
  const userEmail = useSelector(selectUsername);
  const dispatch = useDispatch();
  function quit() {
    dispatch(logOut());
  }
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Hello, {userEmail}</p>
      <ThemeProvider theme={theme}>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.navLinkActive : styles.navLink
          }
          to="/users"
        >
          Users
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.navLinkActive : styles.navLink
          }
          to="/addUsers"
        >
          Add Users
        </NavLink>

        <Button
          type="button"
          variant="outlined"
          color="primary"
          onClick={() => quit()}
        >
          Log Out
        </Button>
      </ThemeProvider>
    </div>
  );
};
