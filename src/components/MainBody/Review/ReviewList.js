import React from 'react';

const ReviewList = ({list}) => {
    const {name, photo, review} = list;
    const {category, text} = review;
    return (
        <div className="col-md-4"> 
        <div className="m-2 text-center bg-white">
        <img style={{height: '50px'}} src={photo} alt=""/>
            <span>{name}</span>
            <p>{text}</p>
            <h2><span className="text-warning">{category}</span> Service</h2>
        </div>
        </div>
    );
};

export default ReviewList;