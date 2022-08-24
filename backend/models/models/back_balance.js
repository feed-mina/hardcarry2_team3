const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('back_balance', {
    balance_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    balance_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    balance_content: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    balance_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    balance_like: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    balance_type: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    balance_ip: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    balance_browser: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'back_balance',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "balance_id" },
        ]
      },
    ]
  });
};
