/// <reference path="../typings/tsd.d.ts" />
/// <reference path="services/photo-gallery.ts" />
require("../libs/rx.all.compat.min.js");
require("../libs/jquery.min");
require("../libs/angular");
require("../libs/angular-route.min");
require("./bootstrap.store");
require("./bootstrap.components");
require("./bootstrap.services");
require("./bootstrap.utilities");
var app = angular.module("shaw.components.library", [
    "ngRoute",
    "routeResolver",
    "routeWhenExtension",
    "shaw.components",
    "shaw.services",
    "shaw.utilities",
    "shaw.store"
]);
app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/", { template: "<div class='placeholder'></div>" });
        $routeProvider.when("/:gallerySlug", { template: "<div class='placeholder'></div>" });
        $routeProvider.when("/:gallerySlug/:photoSlug", { template: "<div class='placeholder'></div>" });
    }]);
app.run(["$rootScope", "photoGallery", function ($rootScope, photoGallery) {
        $rootScope.$on("$routeChangeSuccess", function () { photoGallery.onRouteChangeSuccess(); });
    }]);
//# sourceMappingURL=bootstrap.js.map