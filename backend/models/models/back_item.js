const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('back_item', {
    item_id: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    item_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    item_desc: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    item_img: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    item_voted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'back_item',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "item_id" },
        ]
      },
    ]
  });
};
