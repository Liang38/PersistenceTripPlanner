var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity;
var Day = require('../models').Day;

router.get('/', function(req, res, next) {
  Promise.all([
    Hotel.findAll(),
    Restaurant.findAll(),
    Activity.findAll()
  ])
  .spread(function(dbHotels, dbRestaurants, dbActivities) {
    res.render('index', {
      templateHotels: dbHotels,
      templateRestaurants: dbRestaurants,
      templateActivities: dbActivities
    });
  })
  .catch(next);
});

router.get('/api/hotels', function(req, res, next){
  return Hotel.findAll({})
  .then((array) => {
    res.json(array)
  })
  .catch(console.error)
})

router.get('/api/restaurants', function(req, res, next){
  return Restaurant.findAll({})
  .then((array) => {
    res.json(array)
  })
  .catch(console.error)
})

router.get('/api/activities', function(req, res, next){
  return Activity.findAll({})
  .then((array) => {
    res.json(array)
  })
  .catch(console.error)
})


module.exports = router;
