import React, { useState, useEffect } from 'react'
import instance from '@/config/axios';
import Footer from '@/componenets/footer';
import FilmsCard from '@/componenets/atoms/filmsCard';
import parseAttributes from '@/utils/parse-attributes';

const FilmPage = () => {
    const [films, setFilms] = useState([]);
    useEffect(() => {
        instance.get('/films?populate=*').then((response) => {
            console.log(response.data.data);

            setFilms(parseAttributes(response.data.data));
            console.log(films);

        }).catch((error) => {
            console.log(error);
        });
    }, [])
    return (
        <div className="w-full min-h-screen bg-[url('../assets/img/bg1.jpg')] bg-cover bg-center flex flex-col">
            <div className="w-full min-h-screen flex flex-col backdrop-brightness-50 items-center">
                <div className="self-start text-4xl font-bold text-red-600 drop-shadow-xl p-4 mx-12 mt-2">FilmyDuniya</div>
                <div className="p-8">
                    <div className="grid grid-cols-3 gap-4">
                        {films.map((film: any) => {
                            return (
                                <FilmsCard heading={film.title} content={film.plot} image={film.image} director={film.director} />
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FilmPage
