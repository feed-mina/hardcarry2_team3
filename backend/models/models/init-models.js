var DataTypes = require("sequelize").DataTypes;
var _back_balance = require("./back_balance");
var _back_balance_count = require("./back_balance_count");
var _back_balance_like = require("./back_balance_like");
var _back_diary = require("./back_diary");
var _back_diary_check = require("./back_diary_check");
var _back_diary_like = require("./back_diary_like");
var _back_item = require("./back_item");
var _back_item_vote = require("./back_item_vote");
var _back_test = require("./back_test");

function initModels(sequelize) {
  var back_balance = _back_balance(sequelize, DataTypes);
  var back_balance_count = _back_balance_count(sequelize, DataTypes);
  var back_balance_like = _back_balance_like(sequelize, DataTypes);
  var back_diary = _back_diary(sequelize, DataTypes);
  var back_diary_check = _back_diary_check(sequelize, DataTypes);
  var back_diary_like = _back_diary_like(sequelize, DataTypes);
  var back_item = _back_item(sequelize, DataTypes);
  var back_item_vote = _back_item_vote(sequelize, DataTypes);
  var back_test = _back_test(sequelize, DataTypes);

  back_balance_like.belongsTo(back_balance, { as: "balance", foreignKey: "balance_id"});
  back_balance.hasMany(back_balance_like, { as: "back_balance_likes", foreignKey: "balance_id"});
  back_diary_check.belongsTo(back_diary, { as: "diary", foreignKey: "diary_id"});
  back_diary.hasMany(back_diary_check, { as: "back_diary_checks", foreignKey: "diary_id"});
  back_diary_like.belongsTo(back_diary, { as: "diary", foreignKey: "diary_id"});
  back_diary.hasMany(back_diary_like, { as: "back_diary_likes", foreignKey: "diary_id"});
  back_item_vote.belongsTo(back_item, { as: "item", foreignKey: "item_id"});
  back_item.hasMany(back_item_vote, { as: "back_item_votes", foreignKey: "item_id"});

  return {
    back_balance,
    back_balance_count,
    back_balance_like,
    back_diary,
    back_diary_check,
    back_diary_like,
    back_item,
    back_item_vote,
    back_test,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
