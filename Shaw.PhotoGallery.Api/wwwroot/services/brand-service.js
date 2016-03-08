var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_service_1 = require("./base-service");
var BrandService = (function (_super) {
    __extends(BrandService, _super);
    function BrandService($q, apiEndpoint, fetch) {
        _super.call(this, $q, apiEndpoint, fetch);
    }
    Object.defineProperty(BrandService.prototype, "baseUri", {
        get: function () { return this.apiEndpoint.getBaseUrl() + "/brand"; },
        enumerable: true,
        configurable: true
    });
    return BrandService;
})(base_service_1.BaseService);
exports.BrandService = BrandService;
//# sourceMappingURL=brand-service.js.map