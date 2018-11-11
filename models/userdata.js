'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserData = sequelize.define('UserData', {
    context: DataTypes.STRING,
    gender: DataTypes.INTEGER,
    age: DataTypes.INTEGER,
    height: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    additionalNotes: DataTypes.STRING,
    fileName: DataTypes.STRING,
  }, {
    timestamps: true
  });
  UserData.associate = function (models) {
    UserData.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user'
    });
  };
  return UserData;
};