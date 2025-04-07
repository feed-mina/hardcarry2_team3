const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('back_diary', {
    diary_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    diary_writter: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    diary_content: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    diary_like: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    diary_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    diary_ip: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    diary_browser: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'back_diary',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "diary_id" },
        ]
      },
    ]
  });
};
