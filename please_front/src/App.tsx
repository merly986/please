import { createTheme, ThemeProvider } from "@mui/material/styles";
import { setHomeLink } from "@store/common.ts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "@/pages/";
import CandidateInfo from "@/pages/candidate/CandidateInfo.tsx";
import EntityDetail from "@/pages/entity/EntityDetail.tsx";
import { useDispatch } from "react-redux";
import { lime, purple } from "@mui/material/colors";


function App() {
  const dispatch = useDispatch();

  if (location.origin.includes("localhost")) {
    dispatch(setHomeLink("http://localhost:443"));
  } else {
    // Можно добавить другие origin
    // Если приложуха - часть домена можно забить prefix
  }

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/entity" element={<EntityDetail />} />
          <Route path={"/"} element={<Index />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
