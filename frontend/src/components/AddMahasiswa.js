import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddMahasiswa = () => {
  const [name, setName] = useState('');
  const [nim, setNim] = useState('');
  const history = useHistory();

  const saveMahasiswa = async (e) => {
    e.preventDefaulth();
    await axios.post('http://localhost:5000/mahasiswa', {
      name: name,
      nim: nim,
    });
    history.push('/');
  };

  return (
    <div>
      <form onSubmit={saveMahasiswa}>
        <div className="field">
          <label className="label">Name</label>
          <input class="input" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="field">
          <label className="label">Nim</label>
          <input class="input" type="text" placeholder="Nim" value={nim} onChange={(e) => setNim(e.target.value)} />
        </div>
        <div className="field">
          <button className="button is-primary">Save</button>
        </div>
      </form>
    </div>
  );
};

export default AddMahasiswa;
