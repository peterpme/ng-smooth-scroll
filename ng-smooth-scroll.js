(function () {
    angular.module('ng-smooth-scroll', [])
    .directive('ngSmoothScroll', [function () {

        var active = false,
        activeClsName = 'active';

        function Revealer (btn, hiddenText) {
            this.btn = btn;
            this.hiddenText = hiddenText;

            this.activateState();
        }

        Revealer.prototype = {

            show: function () {
                this.hiddenText.addClass(activeClsName);
                this.btn.addClass(activeClsName);
            },

            hide: function () {
                this.hiddenText.removeClass(activeClsName);
                this.btn.removeClass(activeClsName);
            },

            activateState: function () {
                var _this = this;

                this.btn.on('click', function (e) {
                    e.preventDefault();
                    if (active === false) {
                        _this.replaceActiveHtml();
                        _this.show();
                    } else {
                        _this.removeActiveHtml();
                        _this.hide();
                    }
                    active = !active;
                });
            },

            replaceActiveHtml: function() {
                this.btn.html('<i class="fa fa-minus"></i> Reveal Less');
            },

            removeActiveHtml: function() {
                this.btn.html('<i class="fa fa-plus"></i> Reveal More');
            }

        }

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
