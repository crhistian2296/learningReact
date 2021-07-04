import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (hero) => {
    const [state, setState] = useState({ data: [], loading: true });

    useEffect(() => {
        getGifs(hero).then((imgs) => {
            console.log(imgs);
            setState({
                data: imgs,
                loading: false,
            });
        });
    }, [hero]);

    return state;
};
