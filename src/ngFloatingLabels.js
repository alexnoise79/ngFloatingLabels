/**
 * Created by AlexNoise on 20/03/2015.
 */

'use strict';

angular.module('ngFloatingLabels', ['ngAnimate'])
    .directive("floatingValidation", ['$animate', function($animate){

        return {
            scope: true,
            require: ['^form', 'ngModel'],
            restrict: "A",
            link: function(scope, element, attrs, controller){
                scope.formCtrl = controller[0];
                scope.inputCtrl = controller[1];

                var $float = jQuery('<label for="'+attrs.id+'" class="float">'+attrs.placeholder+'</span>');

                scope.showHide = function(show){
                    if(show){
                        if(!$float.hasClass('top')){
                            element.after($float);
                            $animate.addClass($float, 'top');
                        }
                    }else {
                        $animate.removeClass($float, 'top');
                    }
                };

                scope.showErrors = function(){
                    angular.forEach(scope.inputCtrl.$error, function (e, i) {
                        if (e) {
                            $float.text(messages[i].replace("@value@", attrs[i]));
                        }
                    });
                    scope.showHide(true);
                };

                scope.$watch('inputCtrl.$error', function (newValue) {
                    if(JSON.stringify(newValue) !=='{}' && !scope.inputCtrl.$pristine){
                        scope.showErrors();
                    }
                },true);

                scope.$watch('inputCtrl.$valid', function (newValue) {
                    if(newValue && !scope.inputCtrl.$pristine){
                        $float.text(attrs.placeholder);
                        scope.showHide(true);
                    }
                });

                scope.$watch('inputCtrl.$pristine', function (newValue) {
                    if(newValue && scope.inputCtrl.$touched){
                        scope.showHide(false);
                        scope.inputCtrl.$setUntouched();
                        //immediately reset no debounce
                        scope.inputCtrl.$setViewValue(undefined, scope.inputCtrl.$options.updateOn);
                        scope.inputCtrl.$setPristine();
                    }
                });

                scope.$watch('formCtrl.$submitted', function (newValue) {
                    if(newValue && scope.inputCtrl.$invalid){
                        scope.showErrors();
                    }else if(!scope.inputCtrl.$dirty){
                        //reset if filled void
                        scope.showHide(false);
                    }
                });
            }
        };
    }])
    .directive("floatingLabel", ['$animate', function($animate){
        return {
            scope: true,
            require: 'ngModel',
            restrict: "A",
            link: function(scope, element, attrs, controller){
                scope.inputCtrl = controller;

                var $float = jQuery('<label for="'+attrs.id+'" class="float">'+attrs.placeholder+'</span>');

                scope.showHide = function(show){
                    if(show){
                        if(!$float.hasClass('top')){
                            element.after($float);
                            $animate.addClass($float, 'top');
                        }
                    }else {
                        $animate.removeClass($float, 'top');
                    }
                };
                
                scope.$watch('inputCtrl.$modelValue', function (newValue) {
                    if(newValue !== undefined){
                        scope.showHide(newValue.length);

                        if(!newValue.length){
                            scope.inputCtrl.$setPristine();
                        }
                    }
                });

                scope.$watch('inputCtrl.$pristine', function (newValue) {
                    if(newValue && scope.inputCtrl.$touched){
                        scope.showHide(false);
                        scope.inputCtrl.$setUntouched();
                        //immediately reset no debounce
                        scope.inputCtrl.$setViewValue(undefined, scope.inputCtrl.$options.updateOn);
                        scope.inputCtrl.$setPristine();
                    }
                });
            }
        };
    }])