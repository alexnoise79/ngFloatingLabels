ngFloatingLabels + validation
======================


# Description
---------
##This module has two directives
    * floatingValidation
        * which listen for angular validation events and show/hide the floated label
         
    * floatingLabel
       * which show/hide the placeholder as label when type on


#Installation
---------
##Bower:

    > bower install angular-floating-labels --save


#Usage
---------
    *import customizable css in your project
    <link rel="stylesheet" href="src/ng-floating-labels.css">
    
    *import script in your page 
    <script src="src/ngFloatingLabels.js"></script>
    
    *inject the module dependency
    angular.module('yourProject', ['ngFloatingLabels']);
    
    
    *include the directive on your input or select element
    <input type="text" placeholder="Simple Text" id="simpleText" name="simpleText" ng-model="simpleText" required __floating-validation__/>
    
    ###attribute placeholder is REQUIRED

    ###the parent div of the input field must be position:relative (see example for detail)

Example
---------
