var _q_1 = require("./$q");
exports.extendCssAsync = function (options) {
    return _q_1.$q.when(angular.extend(options.nativeHTMLElement.style, options.cssObject));
};
//# sourceMappingURL=extend-css-async.js.map