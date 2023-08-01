import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const [filmData, setFilmData] = useState([]);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ghibliAPI = await fetch("https://ghibliapi.vercel.app/films");

        if (ghibliAPI.ok === false) {
          throw new Error("Something went wrong");
        }

        const data = await ghibliAPI.json();
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
    <div id="filmWrapper">
      <FilmSection>
        {filmData.map((individualFilm, index) => {
          return (
            <Link to={`/film/${individualFilm.id}`} key={index}>
              <img src={individualFilm.image} alt="Movie Poster" />
            </Link>
          );
        })}
      </FilmSection>
    </div>
  );
};

export default Home;

const FilmSection = styled.main`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100vw;

  img {
    width: 200px;
  }
`;
