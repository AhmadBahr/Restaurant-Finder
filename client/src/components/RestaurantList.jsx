import React from 'react';

const RestaurantList = () => {
  return (
    <div className='list-group'>
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th scope="col">#</th>
            <th scope="col">Restaurant Name</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-secondary">
            <th scope="row">1</th>
            <td>Mark's Diner</td>
            <td>123 Main St</td>
            <td>(555) 555-5555</td>
            <td>mark@example.com</td>
            <td>
              <button className="btn btn-warning btn-sm">Edit</button>
              <button className="btn btn-danger btn-sm ml-2">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RestaurantList;
