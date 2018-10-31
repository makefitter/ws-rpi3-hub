'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserData = sequelize.define('UserData', {
    context: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'This email is already taken.',
        fields: ['email']
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'Email is not in a correct format.'
        },
        notEmpty: true
      }
    },
    gender: DataTypes.INTEGER,
    age: DataTypes.INTEGER,
    height: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    additionalNotes: DataTypes.STRING
  }, {});
  UserData.associate = function (models) {
    // associations can be defined here
  };
  return UserData;
};