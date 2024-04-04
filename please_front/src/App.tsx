import { createTheme, ThemeProvider } from "@mui/material/styles";
import { setHomeLink } from "@store/common.ts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "@/pages/index.tsx";
import { useDispatch } from "react-redux";
import { lime, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: lime,
    secondary: purple,
  },
});

function App() {
  const dispatch = useDispatch();

  if (location.origin.includes("localhost")) {
    dispatch(setHomeLink("http://localhost:443"));
  } else {
    // Можно добавить другие origin
    // Если приложуха - часть домена можно забить prefix
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Index />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
