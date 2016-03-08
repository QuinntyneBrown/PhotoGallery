var UserService = (function () {
    function UserService($q, apiEndpoint, fetch, formEncode) {
        var _this = this;
        this.$q = $q;
        this.apiEndpoint = apiEndpoint;
        this.fetch = fetch;
        this.formEncode = formEncode;
        this.tryToLogin = function (options) {
            var deferred = _this.$q.defer();
            angular.extend(options.data, { grant_type: "password" });
            var formEncodedData = _this.formEncode(options.data);
            var headers = { "Content-Type": "application/x-www-form-urlencoded" };
            _this.fetch.fromService({ method: "POST", url: _this.baseUri + "/token", data: formEncodedData, headers: headers }).then(function (results) {
                deferred.resolve(results.data);
            }).catch(function (error) {
                deferred.resolve(error);
            });
            return deferred.promise;
        };
    }
    Object.defineProperty(UserService.prototype, "baseUri", {
        get: function () { return this.apiEndpoint.getBaseUrl() + "/user"; },
        enumerable: true,
        configurable: true
    });
    return UserService;
})();
exports.UserService = UserService;
//# sourceMappingURL=user-service.js.map