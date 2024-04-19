import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Headers";
import CurrentUserContext from "./contexts/CurrentUserContext";
import Register from "./components/Register";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import * as auth from "./utils/auth";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, purple } from '@mui/material/colors';
import UserProfile from "./components/UserProfile";
import { Alert, Snackbar } from "@mui/material";


const theme = createTheme({
  palette: {
    primary: {
      main: lime[500],
    },
    secondary: {
      main: purple[500],
    },
  },
});


function App() {

  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");


  const user = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@fake.com",
    photo: "https://picsum.photos/200/200"
  };


  function signOut() {
    localStorage.removeItem("token");
    setLoggedIn(false);
    navigate("/sign-in");
  }

  function handleLogin() {
    setLoggedIn(true);
  }

  useEffect(() => {
    checkTokenValidity();
  }, []);

  const handleError = (message) => {
    setErrorMessage(message);
    setIsError(true);
  };

  function checkTokenValidity() {
    const token = localStorage.getItem("token");
    if (token) {
      auth
        .checkToken(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            setEmail(res.data.email);
            navigate("/", { replace: true });
          }
        })
        .catch((err) => console.log(err));
    }
  }


  return (
    <ThemeProvider theme={theme}>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                render={() => (
                  <UserProfile user={user} />
                )}
              />
            }
          />
          <Route
            path="/sign-up"
            element={
              <Register
                openInfoTooltip={setIsTooltipOpen}
                onError={handleError}

              />
            }
          />
          <Route
            path="/sign-in"
            element={
              <Login
                handleLogin={handleLogin}
                onError={handleError}

              />
            }
          />
        </Routes>
        <Header loggedIn={loggedIn} email={email} onSignOut={signOut} />
        <Snackbar
          open={isError}
          autoHideDuration={6000}
          onClose={() => setIsError(false)}
        >
          <Alert severity="error" onClose={() => setIsError(false)}>
            Произошла ошибка: {errorMessage}
          </Alert>
        </Snackbar>

      </CurrentUserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
