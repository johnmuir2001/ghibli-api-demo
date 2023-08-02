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
        <div>
          <h1>{filmData.title}</h1>
          <h2>{filmData.original_title}</h2>
        </div>
      </TopSection>
      <FilmInfo>
        <img src={filmData.image} alt="movie poster" />
        <RightSection>
          <h2>{filmData.original_title}</h2>
          <h1>{filmData.title}</h1>
          <h3>{filmData.original_title_romanised}</h3>
          <div>
            <h4>{filmData.release_date}</h4>
            <h4>{filmData.running_time} mins</h4>
            <h4>{filmData.rt_score}%</h4>
          </div>
          <p>{filmData.description}</p>
        </RightSection>
      </FilmInfo>
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
  position: relative;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  &::before {
    position: absolute;
    content: "";
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    height: 100%;
    width: 550px;
  }

  h1,
  h2 {
    margin: 0 0 0 50px;
    width: 500px;
    position: relative;
  }
  h1 {
    font-size: 80px;
  }
  h2 {
    font-size: 30px;
  }
`;

const FilmInfo = styled.section`
  display: flex;

  img {
    margin: 50px 0 50px 50px;
    height: 700px;
  }
`;

const RightSection = styled.section`
  margin: 50px;
  div {
    display: flex;
    gap: 20px;
  }

  h1 {
    font-size: 40px;
    margin: 10px 0;
  }
  h2 {
    margin: 0;
    font-size: 20px;
  }
  h3 {
    margin: 0;
    font-size: 20px;
  }

  h4 {
    font-size: 20px;
  }

  p {
    margin: 0;
    font-size: 20px;
  }
`;
