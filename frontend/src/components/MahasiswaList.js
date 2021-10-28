import { useState, useEffect } from 'react';
import axios from 'axios';

const MahasiswaList = () => {
  const [mahasiswa, setMahasiswa] = useState([]);

  useEffect(() => {
    getMahasisiswa();
  }, []);

  const getMahasisiswa = async () => {
    const response = await axios.get('http://localhost:3000/mahasiswa');
    console.log(response.data);
  };

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
            <td>909</td>
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

export default MahasiswaList;
