"use strict";

var array = ['Chris', 'Bob', 'Mark', 'Paul'];

// Arrow function syntax
array.forEach(function (e, i, a) {
  var elem = document.createElement('p');
  elem.textContent = i + 1 + '. ' + e;
  document.body.appendChild(elem);
});