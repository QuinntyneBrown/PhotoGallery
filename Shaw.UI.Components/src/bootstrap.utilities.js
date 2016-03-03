require("../libs/angular");
var services = require("./utilities");
var app = angular.module("shaw.utilities", []);
app.service("breakPointManager", [services.BreakPointManager])
    .config(["breakPointManager", function (breakPointManager) { }]);
//# sourceMappingURL=bootstrap.utilities.js.map