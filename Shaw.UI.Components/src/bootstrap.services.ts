require("../libs/angular");
require("../libs/angular-route.min");

import * as services  from "./services";

var app = angular.module("shaw.services", ["ngRoute"]);

app.service("overlay", ["$q","appendToBodyAsync","extendCssAsync", "removeElement","setOpacityAsync",services.Overlay]);
app.service("photoGallery", ["$routeParams","overlay",services.PhotoGallery]);