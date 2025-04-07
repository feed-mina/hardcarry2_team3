const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('back_test', {
    type_id: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    type_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    type_from: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    type_desc: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    type_hashtag1: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    type_hashtag2: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    type_space: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    type_button: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    type_img: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    type_space_link: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    type_space_img1: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    type_space_img2: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    type_space_img3: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    type_space_img4: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    type_like: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    type_like_sub: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    type_dislike: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    type_dislike_sub: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    type_attend: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'back_test',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "type_id" },
        ]
      },
    ]
  });
};
