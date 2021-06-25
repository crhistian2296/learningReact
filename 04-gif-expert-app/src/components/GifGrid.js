import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import GifGridItem from "./GifGridItem";
import { getGifs } from "../helpers/getGifs";

function GifGrid({ hero }) {
    const [images, setImages] = useState([]);

    /*
    const [counter, setCounter] = useState(0)

    //useEffect([func], [dependencies])
    */
    useEffect(() => {
        getGifs(hero).then((imgs) => setImages(imgs));
    }, [hero]);

    //getGifs();

    return (
        <>
            <h3>{hero}</h3>
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
                {images.map((img) => (
                    <GifGridItem key={img.id} {...img} className="grid">
                        {/* spread de las props de img (herencia) */}
                    </GifGridItem>
                ))}
            </div>
        </>
    );
}

GifGrid.propTypes = {
    hero: PropTypes.string.isRequired,
};

export default GifGrid;
