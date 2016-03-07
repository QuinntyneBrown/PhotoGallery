require("../libs/angular");
require("../libs/angular-route.min");
var services = require("./services");
var app = angular.module("shaw.services", ["ngRoute"]);
app.service("overlay", ["$q", "appendToBodyAsync", "extendCssAsync", "removeElement", "setOpacityAsync", services.Overlay]);
app.service("photoGallery", ["$routeParams", "overlay", services.PhotoGallery]);
//# sourceMappingURL=bootstrap.services.js.map