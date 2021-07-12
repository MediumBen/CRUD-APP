const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {

  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  // email: {
  //   type: Sequelize.STRING,
  //   allowNull: false
  // },

  imageURL: {
    type: Sequelize.BLOB,
  },
  
  gpa: {
    type: Sequelize.DOUBLE,
  }
  

});

module.exports = Student;