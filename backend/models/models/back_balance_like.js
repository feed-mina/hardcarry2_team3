const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('back_balance_like', {
    blike_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    balance_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'back_balance',
        key: 'balance_id'
      }
    },
    blike_name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    blike_ip: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    blike_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    blike_browser: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    blike_use: {
      type: DataTypes.STRING(2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'back_balance_like',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "blike_id" },
        ]
      },
      {
        name: "balance_id",
        using: "BTREE",
        fields: [
          { name: "balance_id" },
        ]
      },
    ]
  });
};
