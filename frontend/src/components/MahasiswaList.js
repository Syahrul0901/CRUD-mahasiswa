import React from 'react';

const Mahasiswalist = () => {
  return (
    <div>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Nim</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Name</td>
            <td>999</td>
            <td>
              <button className="button is-small is-info">Edit</button>
              <button className="button is-small is-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Mahasiswalist;
