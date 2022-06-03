// if port 3000 is used by smth execute this command npx kill-port 3000
//import "./App.css";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";

//Router
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />

      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/work" element={<OurWork />} />
        <Route path="/work/:id" element={<MovieDetail />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
