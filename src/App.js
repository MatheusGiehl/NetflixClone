import React, {useState, useEffect} from "react";
import './App.css';
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";

export default () => {
    const [movieList, setMovieList] = useState([]);
    
    useEffect(() => {
        const loadAll = async () => {
            let list = await Tmdb.getHomeList();
            setMovieList(list);
        }

        loadAll();
    }, [])
    return(
        <div className="page">
            <div className="lists">
                {movieList.map((item, key) =>
                <MovieRow key={key} title={item.title} items={item.items} />
                )}
            </div>
        </div>
    )
}