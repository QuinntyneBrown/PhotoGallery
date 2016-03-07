require("../libs/angular");
require("../libs/angular-route.min");
require("./bootstrap.utilities");
var services = require("./services");
var app = angular.module("shaw.services", ["ngRoute"]);
app.service("overlay", ["$q", "appendToBodyAsync", "extendCssAsync", "removeElement", "setOpacityAsync", services.Overlay]);
app.service("photoGallery", ["$compile", "$q", "$rootScope", "$routeParams", "appendToBodyAsync", "extendCssAsync", "overlay", services.PhotoGallery]);
//# sourceMappingURL=bootstrap.services.js.map