require("../libs/angular");
var services = require("./services/overlay");
var app = angular.module("shaw.services", []);
app.service("overlay", [services.Overlay]);
//# sourceMappingURL=bootstrap.services.js.map