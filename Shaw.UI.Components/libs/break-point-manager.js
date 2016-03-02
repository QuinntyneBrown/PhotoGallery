var BreakPointManager = (function () {
    function BreakPointManager($window) {
        var _this = this;
        this.$window = $window;
        this.timeoutId = 0;
        this.breakPoints = { "small": 480, "midSmall": 752, "medium": 960, "large": 1280, "extraLarge": 9999 };
        this.removeResponsiveClasses = function () {
            for (var prop in _this.breakPoints) {
                _this.$window.document.body.classList.remove(prop);
            }
        };
        this.updateResponsiveClass = function (className) {
            _this.removeResponsiveClasses();
            _this.$window.document.body.classList.add(className);
        };
        this.onChange = function (event) {
            if (_this.timeoutId)
                _this.$window.clearTimeout(_this.timeoutId);
            _this.timeoutId = _this.$window.setTimeout(function () {
                var screenWidth = _this.$window.innerWidth;
                for (var propertyName in _this.breakPoints) {
                    if (screenWidth < _this.breakPoints[propertyName]) {
                        _this.updateResponsiveClass(propertyName);
                        break;
                    }
                }
            }, 100);
        };
        $window.document.addEventListener("DOMContentLoaded", function (event) { return _this.onChange(event); });
        $window.addEventListener("resize", function (event) { return _this.onChange(event); });
        $window.addEventListener("orientationchange", function (event) { return _this.onChange(event); });
    }
    return BreakPointManager;
})();
exports.BreakPointManager = BreakPointManager;
var breakPointManager = new BreakPointManager(window);
//# sourceMappingURL=break-point-manager.js.map