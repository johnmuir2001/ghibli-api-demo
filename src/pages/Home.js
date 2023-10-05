import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = ({ filmData, setFilmData, directors, filter, setFilter }) => {
  const sort = (e) => {
    let type = e.target.value.split("-");
    setFilmData([...filmData].sort((a, b) => (type[1] === "NORM") ? a[type[0]] - b[type[0]] : b[type[0]] - a[type[0]]));
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  }

  return (
    <>
      <SortFilter>
        <Dropdown name="films" onChange={sort}>
          <option value="release_date-NORM">Age (oldest - newest)</option>
          <option value="release_date-FLIP">Age (newest - oldest)</option>
          <option value="rt_score-NORM">Rating (worst - best)</option>
          <option value="rt_score-FLIP">Rating (best - worst)</option>
          <option value="running_time-NORM">Runtime (shortest - longest)</option>
          <option value="running_time-FLIP">Runtime (longest - shortest)</option>
        </Dropdown>

        <Dropdown name="directors" onChange={handleFilter} value={filter}>
          <option value="">Any Director</option>
          {directors.map((singleDirector, index) => {
            return <option key={index} value={singleDirector}>{singleDirector}</option>
          })}
        </Dropdown>
      </SortFilter>

      <FilmSection>
        {filmData.map((individualFilm, index) => {
          if(individualFilm.director === filter || filter === ""){
            return (
              <PosterLink
                to={`/film/${individualFilm.id}`}
                bgimg={individualFilm.image}
                key={index}
              ></PosterLink>
            );
          }
          return null;
        })}
      </FilmSection>
    </>
  );
};

export default Home;

const SortFilter = styled.header`
  display: flex;
  justify-content: center;
  margin: 35px 35px 0;
`;

const Dropdown = styled.select`
  color: black;
  margin: 0 20px;
  padding: 8px 10px 6px;

`;

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
