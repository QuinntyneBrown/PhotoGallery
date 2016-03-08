var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_service_1 = require("./base-service");
var PhotoService = (function (_super) {
    __extends(PhotoService, _super);
    function PhotoService($q, apiEndpoint, fetch) {
        _super.call(this, $q, apiEndpoint, fetch);
    }
    Object.defineProperty(PhotoService.prototype, "baseUri", {
        get: function () { return this.apiEndpoint.getBaseUrl() + "/photo"; },
        enumerable: true,
        configurable: true
    });
    return PhotoService;
})(base_service_1.BaseService);
exports.PhotoService = PhotoService;
//# sourceMappingURL=photo-service.js.map