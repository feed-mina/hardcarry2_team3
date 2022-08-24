const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs.readdirSync(__dirname).forEach((model) => {
    if (['index.js', '_migrations'].indexOf(model) !== -1) return;
    const modelFilePath = path.join(__dirname, model, 'index.js');
    if (fs.existsSync(modelFilePath) && fs.lstatSync(modelFilePath).isFile()) {
        model = require(modelFilePath)(sequelize, DataTypes);
        db[model.name] = model;
    }
})


Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.back_diary = require('./models/back_diary')(sequelize,Sequelize);
db.back_item = require('./models/back_item')(sequelize,Sequelize);
db.back_balance = require('./models/back_balance')(sequelize,Sequelize);
db.back_test = require('./models/back_test')(sequelize,Sequelize);
db.back_balance_like = require('./models/back_balance_like')(sequelize,Sequelize);
db.back_balance_count = require('./models/back_balance_count')(sequelize,Sequelize);
db.back_diary_check = require('./models/back_diary_check')(sequelize,Sequelize);
db.back_diary_like = require('./models/back_diary_like')(sequelize,Sequelize);
db.back_item_vote = require('./models/back_item_vote')(sequelize,Sequelize);

module.exports = db;