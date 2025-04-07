const SequelizeAuto = require('sequelize-auto');
const auto = new SequelizeAuto(
    "oneto100",
    "user",
    "1234",
    {
        host: "3.35.152.195",
        port: "3306",
        dialect: "mysql",
        logging:    console.log
//noAlias: true // as 별칭 미설정 여부
    }
);
auto.run((err)=>{
    if(err) throw err;
})
