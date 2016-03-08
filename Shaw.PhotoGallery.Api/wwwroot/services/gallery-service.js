var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_service_1 = require("./base-service");
var GalleryService = (function (_super) {
    __extends(GalleryService, _super);
    function GalleryService($q, apiEndpoint, fetch) {
        _super.call(this, $q, apiEndpoint, fetch);
    }
    Object.defineProperty(GalleryService.prototype, "baseUri", {
        get: function () { return this.apiEndpoint.getBaseUrl() + "/gallery"; },
        enumerable: true,
        configurable: true
    });
    return GalleryService;
})(base_service_1.BaseService);
exports.GalleryService = GalleryService;
//# sourceMappingURL=gallery-service.js.map