/// <reference path="../typings/tsd.d.ts" />
/// <reference path="services/photo-gallery.ts" />

import { PhotoGallery } from "./services/photo-gallery";

require("../libs/rx.all.compat.min.js");
require("../libs/jquery.min");
require("../libs/angular");
require("../libs/angular-route.min");


require("./bootstrap.store");
require("./bootstrap.components");
require("./bootstrap.services");
require("./bootstrap.utilities");


var app: any = angular.module("shaw.components.library", [
    "ngRoute",
    "routeResolver",
    "routeWhenExtension",
    "shaw.components",
    "shaw.services",
    "shaw.utilities",
    "shaw.store"
]);

require("../dist/appTemplates.js");

app.config(["$routeProvider", $routeProvider => {
    $routeProvider.when("/", { template: "<div class='placeholder'></div>" });
    $routeProvider.when("/:gallerySlug", { template: "<div class='placeholder'></div>" });
    $routeProvider.when("/:gallerySlug/:photoSlug", { template: "<div class='placeholder'></div>" });
}]);

app.run(["$rootScope","photoGallery", ($rootScope: angular.IRootScopeService, photoGallery: PhotoGallery) => {
    $rootScope.$on("$routeChangeSuccess", () => { photoGallery.onRouteChangeSuccess(); });
}]);







 