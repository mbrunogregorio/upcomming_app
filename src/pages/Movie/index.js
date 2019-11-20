import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FaArrowLeft } from 'react-icons/fa';

import api from '../../services/api';

import { Container, Poster, Card, Genre, Info, Overview } from './styles';
import logo from '../../images/icon.png';
import posterholder from '../../images/posterholder.png';

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
    };
  }

  async componentDidMount() {
    const { match } = this.props;

    const movieId = match.params.id;

    const response = await api.get(`/movies/${movieId}`);
    this.setState({
      movie: { ...response.data },
    });
  }

  render() {
    const { movie } = this.state;

    return (
      <Container>
        <img src={logo} alt="logo" width="80" />
        <h1>Upcomming Movies Time</h1>
        <Card>
          <Poster>
            <img
              src={movie.poster_path_url ? movie.poster_path_url : posterholder}
              alt="Poster"
            />
          </Poster>
          <Info>
            <h2>{movie.title} </h2>
            <strong>Comming soon: {movie.release_date}</strong>

            <Overview>{movie.overview}</Overview>
            <Genre>
              {movie.genres &&
                movie.genres.map(genre => (
                  <span key={genre.id}>{genre.name}</span>
                ))}
            </Genre>
          </Info>
        </Card>
        <Link to="/">
          <FaArrowLeft />
          Back
        </Link>
      </Container>
    );
  }
}
