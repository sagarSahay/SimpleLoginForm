/**
 * Created by Sagar on 01/07/2015.
 */

var app = angular.module('myApp',[]);
app.directive('optIn', function () {
        return {
            transclude: true,
            templateUrl: 'login-template.html',
            restrict: 'AE',
        }
    });


