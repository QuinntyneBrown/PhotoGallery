var PhotoGallery = (function () {
    function PhotoGallery($compile, $q, $rootScope, $routeParams, appendToBodyAsync, extendCssAsync, overlay, store) {
        var _this = this;
        this.$compile = $compile;
        this.$q = $q;
        this.$rootScope = $rootScope;
        this.$routeParams = $routeParams;
        this.appendToBodyAsync = appendToBodyAsync;
        this.extendCssAsync = extendCssAsync;
        this.overlay = overlay;
        this.store = store;
        this.onRouteChangeSuccess = function () {
            if (_this.$routeParams.gallerySlug) {
                _this.openAsync();
            }
        };
        this.storeOnChange = function (state) { };
        this.openAsync = function () {
            var openAsyncFn = function () {
                return _this.initializeAsync()
                    .then(_this.overlay.openAsync)
                    .then(_this.appendGalleryToBodyAsync)
                    .then(_this.showAsync);
            };
            setTimeout(openAsyncFn, 100);
        };
        this.appendGalleryToBodyAsync = function () { return _this.appendToBodyAsync({ nativeElement: _this.nativeElement }); };
        this.initializeAsync = function () {
            var deferred = _this.$q.defer();
            _this.$scope = _this.$rootScope.$new();
            _this.compileAsync().then(function () {
                _this.nativeElement = _this.augmentedJQuery[0];
                _this.extendCssAsync({
                    nativeHTMLElement: _this.nativeElement,
                    cssObject: {
                        "opacity": "0",
                        "margin": "0px",
                        "position": "absolute",
                        "top": "0",
                        "left": "0",
                        "background-color": "#FFF",
                        "display": "block",
                        "z-index": "999",
                        "width": "100%",
                        "height": "100%",
                        "padding": "0px",
                        "transition": "all 0.5s",
                        "-webkit-transition": "all 0.5s",
                        "-o-transition": "all 0.5s"
                    }
                }).then(function () {
                    deferred.resolve();
                });
            });
            return deferred.promise;
        };
        this.compileAsync = function () {
            var deferred = _this.$q.defer();
            _this.augmentedJQuery = _this.$compile(angular.element(_this.html))(_this.$scope);
            setTimeout(function () {
                _this.$scope.$digest();
                deferred.resolve();
            }, 100);
            return deferred.promise;
        };
        this.showAsync = function () { return _this.extendCssAsync({
            nativeHTMLElement: _this.nativeElement,
            cssObject: {
                "opacity": "1",
            }
        }); };
        this.isOpen = false;
        store.subscribe(this.storeOnChange);
    }
    Object.defineProperty(PhotoGallery.prototype, "html", {
        get: function () { return "<gallery></gallery>"; },
        enumerable: true,
        configurable: true
    });
    return PhotoGallery;
})();
exports.PhotoGallery = PhotoGallery;
//# sourceMappingURL=photo-gallery.js.map