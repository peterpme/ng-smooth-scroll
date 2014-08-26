# Angular Smooth Scrolling Directive

An AngularJS directive that makes scrolling seamless on your page.

## Browser Support
- Chrome, Safari, Opera, FireFox, IE

## Install

Clone the repository and include directly into your project. You can also use bower and install as a dependency:

```
bower install ng-smooth-scroll
```

Add the dependency in your Angular's project dependency arguments:

```js
var app = angular.module('MyApp', [
  'ng-smooth-scroll'
]);
```

Make sure you reference the script in your javascript:

```js
<script src="bower_components/ng-smooth-scroll/ng-smooth-scroll.js"></script>
```

## Usage

Make sure your `reaveler-container` includes:
```
data-ng-revealer
```


### Html Structure

```html
<div class='revealer-container' data-ng-revealer>

  <p class='visible'>Visible</p>
  <p class='hidden'>Hidden</p>
  <a class='btn-reveal'><i class='fa fa-plus'></i> Reveal More</a>

</div>
```

### TODO

-Modernizr for jQuery-fallback transitions
