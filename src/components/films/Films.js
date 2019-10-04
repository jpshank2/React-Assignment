import React, {Component} from 'react';
import FilmCard from "./FilmCard";
import PropTypes from "prop-types";

class Films extends Component {
  render() {
    return this.props.films.map((film) => (
        <FilmCard key={film.title} film={film} />
    ));
  }
}

// PropTypes 
Films.propTypes = {
    films: PropTypes.array.isRequired
}

export default Films;