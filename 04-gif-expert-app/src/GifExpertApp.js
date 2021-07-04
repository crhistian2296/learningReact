import React, { useState } from "react";
import AddHero from "./components/AddHero";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
    // const heroes = ["saitama", "goku", "tanjiro"];
    const [heroes, setHeroes] = useState(["Saitama"]);

    // const handleAdd = () => {
    //     setHeroes((initialState) => [...initialState, "luffy"]);
    //     // console.log(typeof heroes);
    // };

    return (
        <>
            <h2 className="animate__animated animate__bounce">GifExpertApp</h2>
            <AddHero setHeroes={setHeroes} />
            <hr></hr>
            {/* <button type="submit" onClick={handleAdd}>
                add
            </button> */}

            {heroes.map((heroe) => (
                <GifGrid key={heroe} hero={heroe}></GifGrid>
            ))}
        </>
    );
};

export default GifExpertApp;
