import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import styled from "styled-components";

import Home from "./pages/Home";
import About from "./pages/About";
import Movie from "./pages/Movie";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </NavBar>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/film/:movieId" element={<Movie />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

const NavBar = styled.nav`
  background-color: #1f1f1f;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavLink = styled(Link)`
  padding: 20px 35px;
  margin: 0 20px;
  color: white;
  text-decoration: none;

  &:hover {
    background-color: #292929;
  }
`;
