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
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [isError, setIsError] = useState(false);

  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();


  const user = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@fake.com",
    photo: "https://picsum.photos/200/200"
  };

  function closeAllPopups() {
    setIsTooltipOpen(false);

  }

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
                onError={setIsError}

              />
            }
          />
          <Route
            path="/sign-in"
            element={
              <Login
                handleLogin={handleLogin}
              />
            }
          />
        </Routes>
        <Header loggedIn={loggedIn} email={email} onSignOut={signOut} />


      </CurrentUserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
