import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlantPage from "./pages/PlantPage/PlantPage";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlantPage />} />
        <Route path="/plants/:plantId" element={<PlantPage />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
