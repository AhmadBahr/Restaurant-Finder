import React from 'react';

const RestaurantList = () => {
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
          <tr className="table-secondary">
            <th scope="row">1</th>
            <td>Mark's Diner</td>
            <td>123 Main St</td>
            <td>(555) 555-5555</td>
            <td>mark@example.com</td>
            <td>
              <button className="btn btn-warning mr-2">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
          <tr className="table-secondary">
            <th scope="row">2</th>
            <td>Jane's Cafe</td>
            <td>456 Oak St</td>
            <td>(555) 555-1234</td>
            <td>jane@example.com</td>
            <td>
              <button className="btn btn-warning mr-2">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
          <tr className="table-secondary">
            <th scope="row">3</th>
            <td>Bob's Burgers</td>
            <td>789 Pine St</td>
            <td>(555) 555-6789</td>
            <td>bob@example.com</td>
            <td>
              <button className="btn btn-warning mr-2">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RestaurantList;
