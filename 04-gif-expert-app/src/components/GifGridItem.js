import React from "react";

const GifGridItem = ({ id, title, url }) => {
    // console.log(id, title, url);
    return (
        <figure className="card animate__animated animate__fadeIn">
            <img src={url} alt={title} />
            <figcaption className="card-img_title">{title}</figcaption>
        </figure>
    );
};

export default GifGridItem;
