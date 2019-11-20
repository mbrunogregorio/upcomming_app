import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FaSearch, FaSpinner } from 'react-icons/fa';
import InfiniteScroll from 'react-infinite-scroller/dist/InfiniteScroll';
import logo from '../../images/icon.png';
import posterholder from '../../images/posterholder.png';

import {
  Container,
  Form,
  SearchButton,
  ScrollBox,
  ListItem,
  ListItemInfo,
} from './styles';

import api from '../../services/api';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFilter: '',
      movies: [],
      page: '',
      total_pages: '',
      hasMore: true,
    };
  }

  loadItems = async page => {
    const { movies } = this.state;

    const response = await api.get(`/movies?page=${page}`);

    this.setState({
      movies: [...movies, ...response.data.movies],
      searchFilter: '',
      page: response.data.page,
      total_pages: response.data.total_pages,
      hasMore: response.data.page < 5,
    });
  };

  handleInputChange = e => {
    this.setState({ searchFilter: e.target.value });
  };

  handleSearch = async e => {
    e.preventDefault();

    const { searchFilter } = this.state;

    const response = await api.get(`/movies?filter=${searchFilter}`);

    this.setState({
      movies: [...response.data.movies],
      searchFilter: '',
    });
  };

  render() {
    const { searchFilter, movies } = this.state;

    const items = movies.map(movie => (
      <ListItem key={movie.id}>
        <Link to={`/details/${movie.id}`}>
          <li>
            <img
              src={movie.poster_path_url ? movie.poster_path_url : posterholder}
              alt="poster"
            />
            <ListItemInfo>
              <h3>{movie.title}</h3>
              <strong>Comming soon: {movie.release_date}</strong>
              <div>
                {movie.genre_names.map(genre => (
                  <span key={genre}>{genre}</span>
                ))}
              </div>
            </ListItemInfo>
          </li>
        </Link>
      </ListItem>
    ));

    return (
      <Container>
        <h1>
          <img src={logo} alt="logo" width="80" />
          Upcomming Movies Time
        </h1>
        <Form>
          <input
            type="text"
            placeholder="Search..."
            value={searchFilter}
            onChange={this.handleInputChange}
          />
          <SearchButton onClick={this.handleSearch}>
            <FaSearch color="#fff" size={14} />
          </SearchButton>
        </Form>
        <ScrollBox>
          <InfiniteScroll
            pageStart={0}
            loadMore={this.loadItems.bind(this)}
            hasMore={this.state.hasMore}
            useWindow={false}
            element="ul"
            loader={
              <div className="loader" key={0}>
                <FaSpinner />
              </div>
            }
          >
            {items}
          </InfiniteScroll>
        </ScrollBox>
      </Container>
    );
  }
}
