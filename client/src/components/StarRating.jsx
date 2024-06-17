import React from "react";

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<i key={i} className="fa fa-star"></i>);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<i key={i} className="fa fa-star-half-o"></i>);
    } else {
      stars.push(<i key={i} className="fa fa-star-o"></i>);
    }
  }

  return <div>{stars}</div>;
};

export default StarRating;
