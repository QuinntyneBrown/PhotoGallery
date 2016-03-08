var GalleryService = (function () {
    function GalleryService($http, $q, fetch) {
        var _this = this;
        this.$http = $http;
        this.$q = $q;
        this.fetch = fetch;
        this.getBySlug = function (options) {
            var deferred = _this.$q.defer();
            _this.fetch.fromService({ method: "GET", url: _this.baseUri + "/getBySlug", params: { slug: options.slug } })
                .then(function (results) { return deferred.resolve(results.data); });
            return deferred.promise;
        };
    }
    Object.defineProperty(GalleryService.prototype, "baseUri", {
        get: function () { return "/gallery"; },
        enumerable: true,
        configurable: true
    });
    return GalleryService;
})();
exports.GalleryService = GalleryService;
//# sourceMappingURL=gallery-service.js.map