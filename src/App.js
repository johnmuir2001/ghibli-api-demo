import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";

import Home from "./pages/Home";
import About from "./pages/About";
import Movie from "./pages/Movie";

const App = () => {
  const [filmData, setFilmData] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [directors, setDirectors] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ghibliAPI = await fetch("https://ghibliapi.vercel.app/films");

        if (ghibliAPI.ok === false) {
          throw new Error("Something went wrong");
        }

        const data = await ghibliAPI.json();

        setDirectors([...new Set(data.map(film => film.director))])
        setFilmData(data);
      } catch (err) {
        setErrMsg(err.message);
      }
    };

    fetchData();
  }, []);

  if (errMsg !== "") {
    return <h1>{errMsg}</h1>;
  }

  return (
    <BrowserRouter>
      <NavBar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </NavBar>

      <Routes>
        <Route
          path="/"
          element={<Home filmData={filmData} setFilmData={setFilmData} directors={directors} filter={filter} setFilter={setFilter} />}
        ></Route>
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
