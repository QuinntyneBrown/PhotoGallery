var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_service_1 = require("./base-service");
var DescriptionService = (function (_super) {
    __extends(DescriptionService, _super);
    function DescriptionService($q, apiEndpoint, fetch) {
        _super.call(this, $q, apiEndpoint, fetch);
    }
    Object.defineProperty(DescriptionService.prototype, "baseUri", {
        get: function () { return this.apiEndpoint.getBaseUrl() + "/description"; },
        enumerable: true,
        configurable: true
    });
    return DescriptionService;
})(base_service_1.BaseService);
exports.DescriptionService = DescriptionService;
//# sourceMappingURL=description-service.js.map