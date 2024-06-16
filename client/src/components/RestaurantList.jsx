import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RestaurantFinder from '../APIs/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';

const RestaurantList = (props) => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get('/');
        setRestaurants(response.data.data.restaurants);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [setRestaurants]);

  const handleDelete = async (id, e) => {
    e.stopPropagation();

    try {
      const response = await RestaurantFinder.delete(`/${id}`);
      console.log(response);
      setRestaurants(restaurants.filter((restaurant) => restaurant.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = (id, e) => {
    e.stopPropagation();
    navigate(`/restaurants/${id}/update`);
  };

  return (
    <div className='list-group'>
      <table className="table table-hover table-dark">
        <thead className="bg-primary text-white">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Restaurant Name</th>
            <th scope="col">Address</th>
            <th scope="col">Price Range</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {restaurants && restaurants.map((restaurant, index) => (
            <tr key={restaurant.id}>
              <td>{index + 1}</td>
              <td>{restaurant.name}</td>
              <td>{restaurant.address}</td>
              <td>{"$".repeat(restaurant.price_range)}</td>
              <td>{restaurant.phone}</td>
              <td>{restaurant.email}</td>
              <td>
                <button onClick={(e) => handleUpdate(restaurant.id, e)} className="btn btn-warning mt-1">
                  Update
                </button>
                <button onClick={(e) => handleDelete(restaurant.id, e)} className="btn btn-danger mt-1 ml-1">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
