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
    <FilmSection>
      {filmData.map((individualFilm, index) => {
        return (
          <PosterLink
            to={`/film/${individualFilm.id}`}
            bgimg={individualFilm.image}
            key={index}
          ></PosterLink>
        );
      })}
    </FilmSection>
  );
};

export default Home;

const FilmSection = styled.main`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100vw;
  padding: 30px;
  box-sizing: border-box;
`;

const PosterLink = styled(Link)`
  width: 250px;
  height: 375px;
  margin: 5px;
  background-image: url(${(props) => props.bgimg});
  background-size: 100%;
  background-position: center;
  transition: all 0.3s;

  &:hover {
    background-size: 110%;
  }
`;
