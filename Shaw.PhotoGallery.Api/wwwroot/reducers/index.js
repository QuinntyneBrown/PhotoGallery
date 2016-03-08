function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require("./gallery-reducers"));
__export(require("./photo-reducers"));
__export(require("./tab-reducers"));
__export(require("./tag-reducers"));
__export(require("./user-reducers"));
angular.module("reducers", ["store"]).config(["reducersProvider", function (reducersProvider) {
    }]);
//# sourceMappingURL=index.js.map