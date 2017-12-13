const model = require('./model');

let
    Pet = model.Pet,
    User = model.User;

(async () => {
    try {
        var user = await User.create({
            name: 'LO',
            gender: false,
            email: 'LOYOY@EXAMPLE.COM',
            passwd: '******'
        });
        console.log('created: ' + JSON.stringify(user));

        var cat = await Pet.create({
            ownerId: user.id,
            name: 'Oreo',
            gender: false,
            birth: '2017-05-01',
        });
        console.log('created: ' + JSON.stringify(cat));
    } catch (error) {
        console.log(error);
    }
})();
// const Sequelize = require('sequelize');
// const config = require('./config');

// var sequelize = new Sequelize(config.database,
//     config.username, config.password, {
//         host: config.host,
//         dialect: 'mysql',
//         pool: {
//             max: 5,
//             min: 0,
//             idle: 30000
//         }
//     }
// );

// var Pet = sequelize.define('pet', {
//     id: {
//         type: Sequelize.STRING(50),
//         primaryKey: true
//     },
//     name: Sequelize.STRING(100),
//     gender: Sequelize.BOOLEAN,
//     birth: Sequelize.STRING(10),
//     createdAt: Sequelize.BIGINT,
//     updatedAt: Sequelize.BIGINT,
//     version: Sequelize.BIGINT
// }, {
//         timestamps: false
//     }
// );

// var now = Date.now();
// Add
// (async () => {
//     var cat = await Pet.create({
//         id: 'm-' + now,
//         name: 'Oreo',
//         gender: false,
//         birth: '2017-05-01',
//         createdAt: now,
//         updatedAt: now,
//         version: 0
//     });
//     console.log('created: ' + JSON.stringify(cat));
// })();

// Query
// (async () => {
//     var pets = await Pet.findAll({
//         where: {
//             name: 'Oreo'
//         }
//     });
//     console.log(`find ${pets.length} pets:`);
//     for (const p of pets) {
//         console.log(JSON.stringify(p));
//     }
// })();