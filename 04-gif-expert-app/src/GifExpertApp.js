import React, { useState } from "react";
import AddHero from "./components/AddHero";

const GifExpertApp = () => {
    // const heroes = ["saitama", "goku", "tanjiro"];
    const [heroes, setHeroes] = useState(["saitama", "goku", "tanjiro"]);

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
                    <li key={heroe}>{heroe}</li>
                ))}
            </ol>
        </>
    );
};

export default GifExpertApp;
