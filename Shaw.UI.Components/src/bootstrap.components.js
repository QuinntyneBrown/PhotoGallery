require("../libs/angular");
require("./utilities/component-extension");
require("./bootstrap.store");
require("./bootstrap.services");
var photo_gallery_component_1 = require("./components/photo-gallery.component");
var app = angular.module("shaw.components", [
    "shaw.services",
    "shaw.store"
]);
app.component(photo_gallery_component_1.PhotoGalleryComponent);
