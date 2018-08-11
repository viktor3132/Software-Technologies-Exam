const Sequelize = require('sequelize');

module.exports = function (sequelize) {
    return  sequelize.define('Project', {
        Title: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        Description: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        Budget: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });


};