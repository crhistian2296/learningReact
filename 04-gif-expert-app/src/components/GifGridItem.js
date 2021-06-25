import React from "react";

const GifGridItem = ({ id, title, url }) => {
    // console.log(id, title, url);
    return (
        <figure className="card">
            <img src={url} alt={title} />
            <figcaption className="card-img_title">{title}</figcaption>
        </figure>
    );
};

export default GifGridItem;
