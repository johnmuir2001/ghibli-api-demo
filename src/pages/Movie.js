import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Movie = () => {
  const [filmData, setFilmData] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const singleFilm = await fetch(
        `https://ghibliapi.vercel.app/films/${movieId}`
      );
      const data = await singleFilm.json();
      console.log(data);
      setFilmData(data);
    };

    fetchData();
  }, [movieId]);

  return (
    <InfoWrapper>
      <TopSection bgimg={filmData.movie_banner}>
        <h1>{filmData.title}</h1>
      </TopSection>

      <p>{filmData.description}</p>
    </InfoWrapper>
  );
};

export default Movie;

const InfoWrapper = styled.main`
  width: 100vw;
`;

const TopSection = styled.section`
  width: 100%;
  aspect-ratio: 5/2;
  background-image: url(${(props) => props.bgimg});
  background-size: cover;
  background-position: center;
`;
