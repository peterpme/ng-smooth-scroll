(function () {
    angular.module('ng-smooth-scroll', [])
    .directive('ngSmoothScroll', [function () {

        return {
            restrict: 'A',
            link: function (scope, element) {
                console.log('[revealer] init');

                var hidden = angular.element('.hidden-content', element),
                btn = angular.element('.btn-reveal');

                new Revealer(btn, hidden);
            }
        }
    }]);
}());
