import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import RestaurantFinder from "../api/RestaurantFinder";

const UpdateRestaurant = () => {
    const { id } = useParams();
    const history = useHistory();
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RestaurantFinder.get(`/${id}`);
                setName(response.data.restaurant.name);
                setLocation(response.data.restaurant.location);
                setPriceRange(response.data.restaurant.price_range);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await RestaurantFinder.put(`/${id}`, {
                name,
                location,
                price_range: priceRange,
            });
            history.push("/");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h1>Update Restaurant</h1>
            <form onSubmit={handleSubmit} className="form-group">
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        id="name"
                        className="form-control"
                        type="text"
                    />
                </div>
                <div>
                    <label htmlFor="location">Location</label>
                    <input
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        id="location"
                        className="form-control"
                        type="text"
                    />
                </div>
                <div>
                    <label htmlFor="price_range">Price Range</label>
                    <input
                        value={priceRange}
                        onChange={(e) => setPriceRange(e.target.value)}
                        id="price_range"
                        className="form-control"
                        type="number"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Update Restaurant
                </button>
            </form>
        </div>
    );
};

export default UpdateRestaurant;
