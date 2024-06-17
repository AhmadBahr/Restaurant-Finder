import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantFinder from "../APIs/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import StarRating from "../components/StarRating";

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
      <h1>{selectedRestaurant.name}</h1>
      <p>Location: {selectedRestaurant.location}</p>
      <p>Price Range: {"$".repeat(selectedRestaurant.price_range)}</p>
      <p>Phone: {selectedRestaurant.phone}</p>
      <p>Email: {selectedRestaurant.email}</p>
      <StarRating rating={selectedRestaurant.rating} />
    </div>
  );
};

export default RestaurantDetailPage;
