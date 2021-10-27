import Mahasiswa from '../models/mahasiswaModel.js';

export const getAllMahasiswa = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.findAll();
    res.json(mahasiswa);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getMahasiswaByid = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(mahasiswa[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createMahasiswa = async (req, res) => {
  try {
    await Mahasiswa.create(req.body);
    res.json({
      message: 'mahasiswa created',
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateMahasiswa = async (req, res) => {
  try {
    await Mahasiswa.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: 'mahasiswa updated',
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteMahasiswa = async (req, res) => {
  try {
    await Mahasiswa.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: 'mahasiswa deleted',
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
