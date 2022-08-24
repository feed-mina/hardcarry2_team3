const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('back_balance_count', {
    balance_type: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    balance_selected: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'back_balance_count',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "balance_type" },
        ]
      },
    ]
  });
};
