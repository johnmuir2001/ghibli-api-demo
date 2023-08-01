import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
  const [filmData, setFilmData] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const singleFilm = await fetch(
        `https://ghibliapi.vercel.app/films/${movieId}`
      );
      const data = await singleFilm.json();
      setFilmData(data);
    };

    fetchData();
  }, [movieId]);

  return (
    <>
      <h1>{filmData.title}</h1>
      <p>{filmData.description}</p>
    </>
  );
};

export default Movie;
