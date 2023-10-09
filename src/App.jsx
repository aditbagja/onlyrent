import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Kendaraan from "./pages/Kendaraan";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kendaraan" element={<Kendaraan />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
