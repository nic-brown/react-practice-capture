// if port 3000 is used by smth execute this command npx kill-port 3000
//import "./App.css";
import React, { useState } from "react";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";

import MovieDetail from "./pages/MovieDetail";
import { MovieState } from "./MovieState";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";

//Router
import { Route, Routes, useLocation } from "react-router-dom";
// Animations
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);
  //console.log(location);

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />

      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => {
          console.log("exit animation is completed");
        }}
      >
        <Routes location={location} key={location.key}>
          <Route path="/" element={<AboutUs />} />
          <Route path="/work" element={<OurWork />} />
          <Route
            path="/work/:id"
            element={
              <MovieDetail movies={movies} movie={movie} setMovie={setMovie} />
            }
          />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
