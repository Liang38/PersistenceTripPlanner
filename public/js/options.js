'use strict';
/* global $ tripModule attractionsModule hotels restaurants activities */

/**
 * This module fills the `select` tags with `option`s.
 * It runs immediately upon document ready (not called by other modules).
 * Each `option` displays the name of an attraction and is has a value of
 * that attraction's id. Selecting an option looks up the attraction by id,
 * then tells the trip module to add the attraction.
 */
var enhanced = {};
var hotels= 'hi';
var restaurants;
var activities;
  var $optionsPanel = $('#options-panel');
  var $hotelSelect = $optionsPanel.find('#hotel-choices');
  var $restaurantSelect = $optionsPanel.find('#restaurant-choices');
  var $activitySelect = $optionsPanel.find('#activity-choices');

$(function loadPage() {
    var hotelsAjax = $.ajax({
        method: 'GET',
        url: '/api/hotels',
        // dataType: 'json'
    })
    .then(function(allHotels) {
        hotels = allHotels;
        allHotels.forEach(makeOption, $hotelSelect);
    })
    .catch(console.error)

    var restaurantsAjax = $.ajax({
        method: 'GET',
        url: '/api/restaurants',
        // dataType: 'json'
    })
    .then(function(allRestaurants) {
        restaurants = allRestaurants;
        allRestaurants.forEach(makeOption, $restaurantSelect)
    })
    .catch(console.error)

    var activitiesAjax = $.ajax({
        method: 'GET',
        url: '/api/activities',
        // dataType: 'json'
    })
    .then(function(allActivities) {
        activities = allActivities;
        allActivities.forEach(makeOption, $activitySelect);
    })
    .catch(console.error)

    Promise.all([hotelsAjax, restaurantsAjax, activitiesAjax])
    .then(() => {
        attractionsModule.setEnhanced(hotels, restaurants, activities)
    })
    
  function makeOption (databaseAttraction) {
    var $option = $('<option></option>') // makes a new option tag
      .text(databaseAttraction.name)
      .val(databaseAttraction.id);
    this.append($option); // add the option to the specific select
  }
    $('#options-panel').on('click', 'button[data-action="add"]', function () {
    var $select = $(this).siblings('select');
    var type = $select.data('type'); // from HTML data-type attribute
    var id = $select.find(':selected').val();
    // get associated attraction and add it to the current day in the trip
    var attraction = attractionsModule.getByTypeAndId(type, id);
    console.log(attraction)
    tripModule.addToCurrent(attraction);``
  });

})()
