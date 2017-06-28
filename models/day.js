var Sequelize = require('sequelize');
var db = require('./_db');
var Place = require('./place');

var Day = db.define('day', {
    day: {
        type: Sequelize.INTEGER
    }
});

module.exports = Day;