import React from "react";
import "./Detail.css";

class Detail extends React.Component{
    componentDidMount(){
        const { location, history } = this.props;
        if(location.state === undefined){
            history.push("/");
        }
    }
    render(){
        const { location } = this.props;
        if (location.state) {
            return (
            <div className="movieDetail">
                <img src={location.state.poster} alt={location.state.title} title={location.state.title}/>
                <h1>{location.state.title}</h1>
                <h3>Year : {location.state.year}</h3>
                <h3>Genre</h3>
                <ul className="movie_genres">
                    {location.state.genres.map((genre, index) => (
                        <li key={index} className="movie_genres_genre">{genre}</li>
                    ))}
                </ul>
                <div className="movie_summary">{location.state.summary}</div>



            </div>)
        } else {
            return null;
        }
    }
}   

export default Detail;