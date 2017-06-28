var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity;
var Day = require('../models').Day;

router.get('/api/days', function(req, res, next) {
    return Day.findAll({})
    .then(arrayOfDays => {
        res.json(arrayOfDays)
    })
    .catch(next)
});

router.get('/api/days', function(req, res, next) {
    return Day.findOne({})
    .then(day => {
        res.json(day)
    })
    .catch(next)
});

router.post('/api/days', function (req, res, next){
    return Day.create({
    })
    .catch(next)
})

router.delete('/api/days', function(req, res, next) {
    return Day.findOne({})
    .then(day => {
        res.json(day)
    })
    .catch(next)
});
