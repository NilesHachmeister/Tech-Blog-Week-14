const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    confirmPassword() {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            },
        },
    },
    {
        hooks: {
            async beforeCreate(createUserData) {
                createUserData.password = await bcrypt.hash(createUserData.password, 10);
                return createUserData;
            },
        },
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;
