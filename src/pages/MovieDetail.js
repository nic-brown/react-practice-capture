import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { MovieState } from "../MovieState";

const MovieDetail = () => {
  //const history = useNavigate();
  const location = useLocation();
  const url = location.pathname;
  // console.clear();
  // console.log(url);

  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    console.log(currentMovie);

    setMovie(currentMovie[0]);
  }, [movies, url]);
  return (
    // here we do a check: if a movie isn't available yet, don't render anything out then
    <>
      {/* only when the movie is available render out the following  content */}
      {movie && (
        <Details>
          <Headline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt={movie.title} />
          </Headline>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

const Details = styled.div`
  color: #fff;
`;
const Headline = styled.div`
  min-height: 90vh;
  position: relative;
  padding-top: 20vh;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  display: flex;
  margin: 5rem 10rem;
  align-items: flex-start;
  justify-content: space-around;
`;
const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem;
  }
`;
const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};
export default MovieDetail;
