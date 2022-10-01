import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OtherPages from "./pages/OtherPages";
import CalendarPage from "./pages/CalendarPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<OtherPages />} />
        <Route path="/calendar/*" element={<CalendarPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
