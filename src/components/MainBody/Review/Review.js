import React, { useEffect, useState } from 'react';
import ReviewList from './ReviewList';

const Review = () => {
    const [reviewData, setReviewData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviewList')
        .then(res => res.json())
        .then(data => setReviewData(data))
    }, [])
    return (
        <div>
            <h3 className="text-center">User Review</h3>
            <div className="bg-light row justify-content-center">
            {
                reviewData.map(list => <ReviewList key={list._id} list={list}>

                </ReviewList>)
            }
            </div>
        </div>
    );
};

export default Review;