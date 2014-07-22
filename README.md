# AngularJs-TimeDifference

Calculate the hours minutes and seconds between two times


## Usage:

 - Add `angular-timedifference.min.js` to your code:
```html
<script src="angular-timedifference.min.js"></script>
```
 - Add the dependency in your application.
```js
angular.module('MyApp', ['angular-timediff']);
```
 - Add the `iln-time-difference` tag to your project
 - Add your start time in milliseconds to the `data-start-time` attribute
 - Add your end time in milliseconds to the `data-end-time` attribute
```html
<iln-time-difference data-start-time="STARTING-TIME" data-end-time="END-TIME"></iln-time-difference>
```
