import "./App.css";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import NavbarComponent from "./component/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopRated from "./pages/TopRated";
import Login from "./component/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top" element={<TopRated />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
