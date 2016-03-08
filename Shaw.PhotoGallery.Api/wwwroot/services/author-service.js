var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_service_1 = require("./base-service");
var AuthorService = (function (_super) {
    __extends(AuthorService, _super);
    function AuthorService($q, apiEndpoint, fetch) {
        _super.call(this, $q, apiEndpoint, fetch);
    }
    Object.defineProperty(AuthorService.prototype, "baseUri", {
        get: function () { return this.apiEndpoint.getBaseUrl() + "/author"; },
        enumerable: true,
        configurable: true
    });
    return AuthorService;
})(base_service_1.BaseService);
exports.AuthorService = AuthorService;
//# sourceMappingURL=author-service.js.map