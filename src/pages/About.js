import { styled } from "styled-components";
import logo from "../images/Studio_Ghibli_logo.png";

const About = () => {
  return (
    <AboutWrapper>
      <img src={logo} alt="Studio Ghibli logo" />
      <p>
        Studio Ghibli, acclaimed Japanese animation film studio that was founded
        in 1985 by animators and directors Miyazaki Hayao and Takahata Isao and
        producer Suzuki Toshio. Studio Ghibli is known for the high quality of
        its filmmaking and its artistry. Its feature films won both critical and
        popular praise and influenced other animation studios. The headquarters
        are in Tokyo.
      </p>
      <p>
        The{" "}
        <a
          href="https://ghibliapi.vercel.app/"
          rel="noreferrer"
          target="_blank"
        >
          Studio Ghibli API
        </a>{" "}
        is used to get information about the film. There is lots of data
        available on the API but the main data used on this website is to get
        information about the feature films. The main endpoint used is on the
        home page to get all films:
      </p>
      <code>https://ghibliapi.vercel.app/films</code>
      <p>
        The other API endpoint is used to get infromatino about 1 specific
        movie. This data is used on a page you can view bt clicking on a movie
        poster. This endpoint uses the film ID that you select to make an API
        request to get that films information. This also makes use of react
        dynamic routing:
      </p>
      <code>https://ghibliapi.vercel.app/films/&#x3c;id&#x3e;</code>
    </AboutWrapper>
  );
};

export default About;

const AboutWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;

  img {
    filter: invert(100%);
    width: 600px;
  }

  p {
    font-size: 20px;
    padding: 20px 0;
    text-align: center;
  }

  a {
    color: #02adef;
    text-decoration: none;
  }

  code {
    font-family: monospace;
    font-size: 16px;
    background-color: #4f4f4f;
    padding: 5px 10px;
    border-radius: 3px;
  }
`;
