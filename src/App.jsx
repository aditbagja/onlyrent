import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Kendaraan from "./pages/Kendaraan";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kendaraan" element={<Kendaraan />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
