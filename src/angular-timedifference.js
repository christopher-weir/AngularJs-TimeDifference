/*
 * Angular Time Difference
 * Calculate the hh mm and ss between two times
 *
 *
 *
 */

angular.module('angular-timediff', []).
    directive('ilnTimeDifference', [
        function () {
        return {
            restrict: 'E',
            template:
                '<div id="iln-time-diff">'+
                '<span id="iln-time-diff-hour">{{ hour }}</span>'+
                '<span id="iln-time-diff-minute">{{ minute }}</span>'+
                '<span id="iln-time-diff-second">{{ second }}</span>'+
                '</div>',
            link:   function ( scope, elm, attrs ) {

                var startTime   = attrs.startTime;
                var endTime     = attrs.endTime;
                var initialTime = endTime - startTime;

                scope.convertTime = function( _milsec ){
                    var _sec = _milsec / 1000;

                    scope.hour = Math.floor(((_sec % 31536000) % 86400) / 3600);
                    scope.minute = Math.floor((((_sec % 31536000) % 86400) % 3600) / 60);
                    scope.second = Math.floor(((_sec % 31536000) % 86400) % 3600) % 60;
                };
                scope.convertTime( initialTime );
            }
        };
    }]);
