import React, {useState, useEffect} from "react";
import './App.css';
import Tmdb from "./Tmdb";

export default () => {
    const [movieList, setMovieList] = useState([]);
    
    useEffect(() => {
        const loadAll = async () => {
            let list = await Tmdb.getHomeList();
            console.log(list)
        }

        loadAll();
    }, [])
    return(
        <h1>Oi</h1>
    )
}