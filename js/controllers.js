(function() {
  'use strict';

  const app = angular.module('cameraApp');

  app.controller('CameraCtrl', function() {
    this.cameras = [
      {
        id: 1,
        name: 'Nikon D3100 DSLR',
        image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',
        rating: 4,
        price: 369.99,
        onSale: true
      },
      {
        id: 2,
        name: 'Canon EOS 70D',
        image: 'http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg',
        rating: 2,
        price: 1099.0,
        onSale: false
      },
      {
        id: 3,
        name: 'Nikon D810A',
        image:'http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg',
        rating: 3,
        price: 3796.95,
        onSale: true
      }];

      this.search = '';

      this.sortBy = 'name';

  });

  app.controller('CartCtrl', function() {

    this.cartItems = [];

    this.addToCart = function(camera) {
      this.cartItems.push({
        name: camera.name,
        price: camera.price
      });
    };

  });


}());
