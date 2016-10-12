(function() {
  'use strict';

  $('select').material_select();

  const app = angular.module('cameraApp', []);

  app.filter('ratingStars', function() {
    return function (input) {

      let stars = '';

      for (var i = 0; i < input; i++) {
        stars += '⭐️';
      }

      return stars;

  };
});
})();
