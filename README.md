[![GitHub version](https://badge.fury.io/gh/https%3A%2F%2Fgithub.com%2Falexnoise79%2FngFloatingLabels.svg)](https://github.com/alexnoise79/ngFloatingLabels) [![Bower version](https://badge.fury.io/bo/angular-floating-labels.svg)](http://badge.fury.io/bo/angular-floating-labels)

Floating Validation and Labels for AngularJS
======================

# Description
---------
###This module has two directives
- `floatingValidation`
  - which listen for angular validation events and show/hide the floated label
- `floatingLabel`
  - which show/hide the placeholder as label when type on

#Installation
---------
##Bower:
    > bower install angular-floating-labels --save

#Usage
---------
- import customizable css in your project

```html
<link rel="stylesheet" href="src/ng-floating-labels.css">
```
- import script in your page

```html
<script src="src/ngFloatingLabels.js"></script>
```
- inject the module dependency

```js
angular.module('yourProject', ['ngFloatingLabels']);
```
- include the directive on your input or select element

```html
<input type="text" placeholder="Simple Text" id="simpleText" name="simpleText" ng-model="simpleText" required floating-validation/>
```

#### attribute placeholder is *REQUIRED*
#### the parent div of the input field must be ```position:relative``` (see example for detail)

Example
---------
