// import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

function GifGrid({ hero }) {
    // const [images, setImages] = useState([]);

    /*
    const [counter, setCounter] = useState(0)

    //useEffect([func], [dependencies])
    */
    // useEffect(() => {
    //     getGifs(hero).then((imgs) => setImages(imgs));
    // }, [hero]);

    //getGifs();

    const { data, loading } = useFetchGifs(hero);

    return (
        <div className="gif-results">
            <h3 className="animate__animated animate__fadeIn">{hero}</h3>
            {loading && <p className="animate__animated animate__flash"></p>}

            {/* usando map para imprimir titulos
            <ol>
                {images.map(({ id, title }) => (
                    <li key={id}>{title}</li>
                ))}
            </ol> */}
            {/* Necesarios para ver que hace useEffect
                <h3>{counter}</h3>
                <button type="submit" onClick={() => setCounter(counter + 1)}>+1</button>
            */}
            <div className="gif-container">
                {data.map((img) => (
                    <GifGridItem key={img.id} {...img} className="grid">
                        {
                            // spread de las props de img (herencia)
                        }
                    </GifGridItem>
                ))}
            </div>
        </div>
    );
}

GifGrid.propTypes = {
    hero: PropTypes.string.isRequired,
};

export default GifGrid;
