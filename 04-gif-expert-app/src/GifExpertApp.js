import React, { useState } from "react";
import AddHero from "./components/AddHero";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
    // const heroes = ["saitama", "goku", "tanjiro"];
    const [heroes, setHeroes] = useState(["saitama"]);

    // const handleAdd = () => {
    //     setHeroes((initialState) => [...initialState, "luffy"]);
    //     // console.log(typeof heroes);
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddHero setHeroes={setHeroes} />
            <hr></hr>
            {/* <button type="submit" onClick={handleAdd}>
                add
            </button> */}
            <ol>
                {heroes.map((heroe) => (
                    <GifGrid key={heroe} hero={heroe}></GifGrid>
                ))}
            </ol>
        </>
    );
};

export default GifExpertApp;
