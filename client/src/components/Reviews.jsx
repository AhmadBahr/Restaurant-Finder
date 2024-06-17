import React from 'react';
import StarRating from './StarRating';

const Reviews = ({ reviews }) => {
    return (
        <div className='row row-cols-3 mb-2'>
            {reviews.map((review) => (
                <div key={review.id} className='card text-white bg-primary mb-3 mr-4' style={{ maxWidth: "30%" }}>
                    <div className='card-header d-flex justify-content-between'>{review.name}</div>
                    <span>
                        <StarRating rating={review.rating} />
                    </span>
                    <div className='card-body'>
                        <StarRating rating={review.rating} />
                        <p className='card-text'>{review.reviewText}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Reviews;
