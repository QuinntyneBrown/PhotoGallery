/// <reference path="typings/tsd.d.ts" />
require("./libs/angular");
require("./libs/component-extension");
var photo_gallery_component_1 = require("./components/photo-gallery/photo-gallery.component");
var app = angular.module("photoGalleryApp", []);
app.component(photo_gallery_component_1.PhotoGalleryComponent);
angular.element(document).ready(function () { return angular.bootstrap(document.getElementById("photo-gallery-app"), ['photoGalleryApp']); });
//# sourceMappingURL=bootstrap.photo-gallery.js.map