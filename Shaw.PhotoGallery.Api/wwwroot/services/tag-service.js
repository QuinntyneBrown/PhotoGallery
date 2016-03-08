var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_service_1 = require("./base-service");
var TagService = (function (_super) {
    __extends(TagService, _super);
    function TagService($q, apiEndpoint, fetch) {
        _super.call(this, $q, apiEndpoint, fetch);
    }
    Object.defineProperty(TagService.prototype, "baseUri", {
        get: function () { return this.apiEndpoint.getBaseUrl() + "/tag"; },
        enumerable: true,
        configurable: true
    });
    return TagService;
})(base_service_1.BaseService);
exports.TagService = TagService;
//# sourceMappingURL=tag-service.js.map