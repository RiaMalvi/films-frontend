import React, { useState, useEffect } from 'react'
import instance from '@/config/axios';

const FilmPage = () => {
    const [films, setFilms] = useState([]);
    useEffect(() => {
        instance.get('/films').then((response) => {
            console.log(response.data);
            setFilms(response.data.data);

        }).catch((error) => {
            console.log(error);
        });
    }, [])
    return (
        <div>
            <h1>Films</h1>
            <ul>
                {films.map((film: any, index) => {
                    return <li key={index}>{film.attributes.title}</li>
                })}
            </ul>
        </div>
    )
}

export default FilmPage
