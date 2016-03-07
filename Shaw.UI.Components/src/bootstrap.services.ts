require("../libs/angular");
require("../libs/angular-route.min");
require("./bootstrap.utilities");

import * as services  from "./services";

var app = angular.module("shaw.services", ["ngRoute"]);

app.service("overlay", ["$q", "appendToBodyAsync", "extendCssAsync", "removeElement", "setOpacityAsync", services.Overlay]);

app.service("photoGallery", ["$compile", "$q", "$rootScope", "$routeParams", "appendToBodyAsync","extendCssAsync","overlay",services.PhotoGallery]);