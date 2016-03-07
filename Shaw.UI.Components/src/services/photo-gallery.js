var PhotoGallery = (function () {
    function PhotoGallery($routeParams, overlay) {
        var _this = this;
        this.$routeParams = $routeParams;
        this.overlay = overlay;
        this.onRouteChangeSuccess = function () {
            if (_this.$routeParams.gallerySlug) {
                _this.overlay.openAsync();
            }
            if (_this.$routeParams.gallerySlug && _this.$routeParams.photoSlug && !_this.isOpen) {
            }
        };
        this.isOpen = false;
    }
    return PhotoGallery;
})();
exports.PhotoGallery = PhotoGallery;
//# sourceMappingURL=photo-gallery.js.map