const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('./sequelize');

class Todo extends Model {}

Todo.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Todo',
    tableName: 'Todo',
    paranoid: true,
    timestamps: true,
  }
);

module.exports = { Todo };
