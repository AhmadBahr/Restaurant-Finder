import React from 'react';
import StarRating from './StarRating';

const Reviews = () => {
    return (
        <div className='row row-cols-3 mb-2'>
            <div className='card text-white bg-primary mb-3 mr-4' style={{ maxWidth: "30%" }}>
                <div className='card-header d-flex justify-content-between'>
                    <span>Review Header</span>
                </div>
                <div className='card-body'>
                    <h5 className='card-title'>Joan</h5>
                    <StarRating rating={4.5} />
                    <div className='card-body'>
                        <p className='card-text'>This is a sample review text. The food was amazing and the service was excellent!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
