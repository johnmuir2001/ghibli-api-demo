import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import styled from "styled-components";

import Home from "./pages/Home";
import About from "./pages/About";
import Movie from "./pages/Movie";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/film/:movieId" element={<Movie />}></Route>
      </Routes>

      <footer>
        <p>This is my footer</p>
      </footer>
    </BrowserRouter>
  );
};

export default App;

const NavLink = styled(Link)`
  padding: 20px 35px;
  margin: 0 20px;
`;
