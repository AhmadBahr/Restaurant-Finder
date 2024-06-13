import React, { useContext, useEffect, useState } from 'react';
import RestaurantFinder from '../APIs/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';

const RestaurantList = () => {
  const { Restaurants, setRestaurants } = useContext(RestaurantsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get("/");
        setRestaurants(response.data);
        console.log(response.data);
      } catch (err) {
        console.error("Error fetching Restaurants", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='list-group'>
      <table className="table table-hover table-dark">
        <thead className="bg-primary text-white">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Restaurant Name</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(Restaurants) && Restaurants.map((restaurant, index) => (
            <tr className="table-secondary" key={restaurant.id}>
              <th scope="row">{index + 1}</th>
              <td>{restaurant.name}</td>
              <td>{restaurant.address}</td>
              <td>{restaurant.phone}</td>
              <td>{restaurant.email}</td>
              <td>
                <button className="btn btn-warning mr-2">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
