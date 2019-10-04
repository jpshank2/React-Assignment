import React, {Component} from "react";
import Header from "./components/layout/Header";
import Films from "./components/films/Films";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            films: []
        }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(response => response.json())
        .then(data => {
            this.setState({films: data});
        });
    }

    render() {
        return (
            <div className="container">
                <Header />
                <br></br>
                <div className="cards">
                    <Films films={this.state.films} />
                </div>
            </div>
        )
    }
}

export default App;