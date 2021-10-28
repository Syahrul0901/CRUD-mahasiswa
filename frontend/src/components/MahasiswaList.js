import { useState, useEffect } from 'react';
import axios from 'axios';

const MahasiswaList = () => {
  const [mahasiswa, setMahasiswa] = useState([]);

  useEffect(() => {
    getMahasiswa();
  }, []);

  const getMahasiswa = async () => {
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
            <td>2</td>
            <td>udin</td>
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

export default MahasiswaList;
