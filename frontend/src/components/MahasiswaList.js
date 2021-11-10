import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MahasiswaList = () => {
  const [mahasiswa, setMahasiswa] = useState([]);

  useEffect(() => {
    getMahasiswa();
  }, []);

  const getMahasiswa = async () => {
    const response = await axios.get('http://localhost:5000/mahasiswa');
    setMahasiswa(response.data);
  };

  return (
    <div>
      <Link to="/add" className="button is-primary mt-2">
        Add New
      </Link>
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
          {mahasiswa.map((mahasiswa, index) => (
            <tr key={mahasiswa.id}>
              <td>{index + 1}</td>
              <td>{mahasiswa.name}</td>
              <td>{mahasiswa.nim}</td>
              <td>
                <button className="button is-small is-info">Edit</button>
                <button className="button is-small is-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MahasiswaList;
