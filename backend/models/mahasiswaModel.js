import { Sequelize } from 'sequelize';
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const Mahasiswa = db.define(
  'mahasiswa',
  {
    name: {
      type: DataTypes.STRING,
    },
    nim: {
      type: DataTypes.DOUBLE,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Mahasiswa;
