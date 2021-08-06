import PropTypes from "prop-types";
import React from "react";

const GifGridItem = ({ title, url }) => {
    // console.log(id, title, url);
    return (
        <figure className="card animate__animated animate__fadeIn">
            <img src={url} alt={title} />
            <figcaption className="card-img_title">{title}</figcaption>
        </figure>
    );
};

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default GifGridItem;
