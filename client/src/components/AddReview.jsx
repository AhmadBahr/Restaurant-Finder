import React, { useState } from 'react';

const AddReview = () => {
    const [name, setName] = useState('');
    const [rating, setRating] = useState('');
    const [reviewText, setReviewText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, rating, reviewText });
        setName('');
        setRating('');
        setReviewText('');
    }

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
                    ></textarea>
                </div>
                <div className='form-group col-8 mt-2'>
                    <label htmlFor="rating">Rating</label>
                    <select
                        id="rating"
                        className="form-control"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
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
    )
}

export default AddReview;
