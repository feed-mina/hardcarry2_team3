const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('back_item_vote', {
    bvote_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    item_id: {
      type: DataTypes.STRING(20),
      allowNull: false,
      references: {
        model: 'back_item',
        key: 'item_id'
      }
    },
    bvote_name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    bvote_ip: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    bvote_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    bvote_browser: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'back_item_vote',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bvote_id" },
        ]
      },
      {
        name: "item_id",
        using: "BTREE",
        fields: [
          { name: "item_id" },
        ]
      },
    ]
  });
};
