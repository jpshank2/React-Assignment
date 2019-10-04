import React, { Component } from 'react';
import PropTypes from "prop-types";

export class FilmCard extends Component {
    render() {
        const {title, description, director, release_date} = this.props.film;
        return (
            <div style={cardStyle}>
                <h3 style={titleStyle}>
                    {title}
                </h3>
                <p>
                    {description}
                </p>
                <br></br>
                <p style={{textAlign: "center"}}>
                    Directed by: {director}
                </p>
                <br></br>
                <p>
                    Released in: {release_date}
                </p>
            </div>
        )
    }
};

// PropTypes 
FilmCard.propTypes = {
    film: PropTypes.object.isRequired
};

const titleStyle = {
    textAlign: "center",
    borderBottom: "1px dotted black"
}

const cardStyle = {
    flexDirection: "row",
    width: "30%",
    justifyContent: "space-evenly",
    padding: "5px",
}

export default FilmCard;