import React, { Component } from 'react';
import Axios from "axios";
import FilmItem from "./FilmItem.js";
class Films extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {films:  false , Message: "Still Loading"}
    }

    componentDidMount(){
        Axios.get("http://swapi.co/api/films/")
            .then((result) => {
                this.setState({
                    films: result.data.results,
                    message: ""
                })
            })
    }

    render(){
        if (this.state.films){
            var Movies = this.state.films.map((Movie)=> {
                return < FilmItem key={Movie.episode_id}  FilmData={Movie} /> 
            })
            return(
                <div>
                    <h1>This is the Films Component </h1>
                    {Movies}
                </div>
            )
        }
        else {
            return <h1> {this.state.Message} </h1>
        }
                    
    }
}

export default Films;



