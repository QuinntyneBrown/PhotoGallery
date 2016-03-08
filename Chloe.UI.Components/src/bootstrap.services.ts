require("../libs/angular");
require("../libs/angular-route.min");
require("./bootstrap.utilities");

import * as services  from "./services";

var app = angular.module("chloe.services", ["ngRoute"]);

app.service("galleryService", [
    "$http",
    "$q",
    "fetch",
    services.GalleryService]);

app.service("overlay", ["$q", "appendToBodyAsync", "extendCssAsync", "removeElement", "setOpacityAsync", services.Overlay]);

app.service("photoGallery", [
    "$compile",
    "$q",
    "$rootScope",
    "$routeParams",
    "appendToBodyAsync",
    "extendCssAsync",
    "overlay",
    "store",
    services.PhotoGallery]);