'use strict';
/* global $ tripModule */

$(tripModule.load);

// $(function loadPage() {
//     $.ajax({
//         method: 'GET',
//         url: '/api/hotels',
//         // dataType: 'json'
//     })
//     .then(function(allHotels) {
//         let hotelsHTML = allHotels.map(hotel => {
//             return`<option>${hotel.name}</option>`
//         })
//         $('#hotel-choices').append(hotelsHTML);
//     })
//     .catch(console.error)

//     $.ajax({
//         method: 'GET',
//         url: '/api/restaurants',
//         // dataType: 'json'
//     })
//     .then(function(allRestaurants) {
//         let restaurantHTML = allRestaurants.map(restaurant => {
//             return`<option>${restaurant.name}</option>`
//         })
//         $('#restaurant-choices').append(restaurantHTML);
//     })
//     .catch(console.error)

//     $.ajax({
//         method: 'GET',
//         url: '/api/activities',
//         // dataType: 'json'
//     })
//     .then(function(allActivities) {
//         let activitiesHTML = allActivities.map(activity => {
//             return`<option>${activity.name}</option>`
//         })
//         $('#activity-choices').append(activitiesHTML);
//     })
//     .catch(console.error)
// })()
