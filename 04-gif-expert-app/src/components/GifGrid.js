import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function GifGrid({ hero }) {

    const [counter, setCounter] = useState(0)

    //useEffect([func], [dependencies])
    useEffect(() => {
        getGifs()
    }, [])

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?api_key=NFxoxsrYkc0d1jXPTyypk9DB5KUHltu1&q=Rickand+Morty&limit=10';

        const resp = await fetch(url);
        const { data } = await resp.json();
        const gifs = data.map((img) => ({
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }))
        console.log({ gifs });
    }

    //getGifs();

    return (
        <>
            <li>{hero}</li>
            <h3>{counter}</h3>
            <button type="submit" onClick={() => setCounter(counter + 1)}>+1</button>
        </>
    )
}

GifGrid.propTypes = {
    hero: PropTypes.string.isRequired,
}

export default GifGrid
