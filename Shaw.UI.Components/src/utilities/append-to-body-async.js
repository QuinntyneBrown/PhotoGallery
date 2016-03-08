var _q_1 = require("./$q");
exports.appendToBodyAsync = function (options) {
    var deferred = _q_1.$q.defer();
    document.body.appendChild(options.nativeElement);
    setTimeout(function () { deferred.resolve(); }, options.wait || 100);
    return deferred.promise;
};
