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
    this.subtotal = 0;
    this.tax = 0;
    this.total = 0;

    this.addToCart = function(cameraToAdd) {
      let existingCamera = this.cartItems.filter(camera => {
        return camera.id === cameraToAdd.id;
      })[0];

      if (existingCamera) {
        existingCamera.quantity++;
      } else {
        this.cartItems.push({
          id: cameraToAdd.id,
          quantity: 1,
          price: cameraToAdd.price,
          name: cameraToAdd.name
        });
      }
      this.subtotal = calcSubtotal(this.cartItems);
      this.tax = calcTax(this.subtotal);
      this.total = this.subtotal + this.tax;
    };

    this.removeFromCart = function(cameraToRemove) {
      let removalIndex = this.cartItems.indexOf(cameraToRemove);
      this.cartItems.splice(removalIndex, 1);

      this.subtotal = calcSubtotal(this.cartItems);
      this.tax = calcTax(this.subtotal);
      this.total = this.subtotal + this.tax;
    };

    function calcSubtotal(array) {
      let subtotal = 0;
      array.map(item => {
        subtotal += (item.price * item.quantity);
      });
      console.log(subtotal);
      return subtotal;
    }

    function calcTax(num) {
      return num * 0.08;
    }

  });


}());
