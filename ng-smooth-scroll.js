(function () {
    angular.module('ng-smooth-scroll', [])
    .directive('ngSmoothScroll', [function () {

        return {
            restrict: 'A',
            link: function (scope, element) {
                console.log('[smoothScrol] init');

                var trigger=angular.element('.scroll-to', element);

                trigger.on('click', function () {
                    var $this = angular.element(this);
                    target = $(this).attr('href');

                    console.log(name);
                    console.log(target.slice(1));
                    console.log($("[name=one"));

                    // $('html, body').animate({
                    //     scrollTop: target.offset().top
                    // }, 1000);

                    return false;
                });
            }
        }
    }]);
}());
