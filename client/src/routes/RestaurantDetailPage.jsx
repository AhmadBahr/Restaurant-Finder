import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantFinder from "../APIs/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import StarRating from "../components/StarRating";
import Reviews from "../components/Reviews"; // Assuming Reviews component is imported
import AddReview from "../components/AddReview"; // Assuming AddReview component is imported

const RestaurantDetailPage = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        setSelectedRestaurant(response.data.restaurant);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [id, setSelectedRestaurant]);

  if (!selectedRestaurant) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="mt-3">
        <h1 className="text-center display-1">{selectedRestaurant.name}</h1>
        <div className="text-center">
          <StarRating rating={parseFloat(selectedRestaurant.average_rating)} />
          <span className="text-warning ms-1">{selectedRestaurant.average_rating}</span>
        </div>
        <div className="mt-3">
          <p>{selectedRestaurant.location}</p>
        </div>
        <div>
          <p>{selectedRestaurant.description}</p>
        </div>
      </div>

      <div className="mt-3">
        <Reviews reviews={selectedRestaurant.reviews} />
      </div>
      
      <AddReview />

      <div className="text-center">
        <a href="/" className="btn btn-danger">
          Go Back
        </a>
      </div>
    </div>
  );
};

export default RestaurantDetailPage;
