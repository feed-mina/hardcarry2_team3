const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('back_diary_like', {
    dlike_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    diary_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'back_diary',
        key: 'diary_id'
      }
    },
    dlike_name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    dlike_ip: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    dlike_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dlike_browser: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    dlike_use: {
      type: DataTypes.STRING(2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'back_diary_like',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dlike_id" },
        ]
      },
      {
        name: "diary_id",
        using: "BTREE",
        fields: [
          { name: "diary_id" },
        ]
      },
    ]
  });
};
