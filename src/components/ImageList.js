import React from 'react';
import './ImageList.css';

const ImageList = (props) => {
    const images = props.images.map(({ description, id, urls }) => {
        return <img
            className="img"
            src={urls.regular}
            alt={description}
            key={id}
        />
    });

    return <div className="img-list">{images}</div>
}

export default ImageList;