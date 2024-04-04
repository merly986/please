import { useState } from 'react';
//import { useDispatch } from 'react-redux';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, purple } from '@mui/material/colors';
import { setHomeLink } from "@store/common.ts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Index from "@/pages/index.tsx"

const theme = createTheme({
  palette: {
    primary: lime,
    secondary: purple,
  },
})

function App() {
  // const dispatch = useDispatch();
  // const [count, setCount] = useState(0)

  if (location.origin.includes("localhost")){
    // dispatch(setHomeLink("http://localhost:443"));
  } else {
    // Можно добавить другие origin
    // Если приложуха - часть домена можно забить prefix
  } 

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element=<Index/> />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
