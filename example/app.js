/**
 *  @author Alex Vitari alexnoise79@gmail.com
 *  @description this is an example scope to launch the ngFloatingLabels module.
 *  @requires https://github.com/alexnoise79/ngFloatingLabels
 *  @global messages is a collection of labels to simplify the import from locale variables
 *  @see https://github.com/angular/bower-angular-i18n for details
 */

'use strict';


/*messages could be localized see i18n for angular*/
var messages = {
    required: "this field is required",
    minlength: "min length of @value@ characters",
    pattern: "don\'t match the pattern",
    "email": "mail address not valid",
    "number": "insert only numbers",
    "custom" : "custom not valid type \"@value@\""
};


var app = angular.module('app', ['ngFloatingLabels']);

app.directive('customValidator', function() {
    return {
        require : 'ngModel',
        link : function(scope, element, attrs, ngModel) {
            ngModel.$validators.custom = function(value) {
                return value === "ciao";
            };
        }
    };
});