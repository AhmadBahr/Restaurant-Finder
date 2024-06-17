import React, { useState } from 'react';
import RestaurantFinder from '../APIs/RestaurantFinder';

const AddReview = () => {
    const [name, setName] = useState('');
    const [rating, setRating] = useState('');
    const [reviewText, setReviewText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name,
            rating: parseInt(rating), 
            review: reviewText
        };

        RestaurantFinder.post(`/${location.pathname}/addReview`, formData)
            .then((response) => {
                console.log(response);
                setName('');
                setRating('');
                setReviewText('');
            })
            .catch((err) => {
                console.error('Error adding review:', err);
            });
    };

    return (
        <div className='mb-2'>
            <form onSubmit={handleSubmit}>
                <div className='form-group col-8'>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder='Enter your name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className='form-group col-8 mt-2'>
                    <label htmlFor="review">Review</label>
                    <textarea
                        id="review"
                        className="form-control"
                        placeholder='Enter your review'
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className='form-group col-8 mt-2'>
                    <label htmlFor="rating">Rating</label>
                    <select
                        id="rating"
                        className="form-control"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        required
                    >
                        <option value="">Choose rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <button type='submit' className='btn btn-primary mt-2'>Submit</button>
            </form>
        </div>
    );
};

export default AddReview;
