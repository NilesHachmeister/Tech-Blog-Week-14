const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userSeed = require('./userSeed.json');
const postSeed = require('./postSeed.json');

const seedExamples = async () => {

    await sequelize.sync({ force: true });

    await User.bulkCreate(userSeed, {
        individualHooks: true,
        returning: true,
    });

    await Post.bulkCreate(postSeed);

    process.exit(0);
};

seedExamples();