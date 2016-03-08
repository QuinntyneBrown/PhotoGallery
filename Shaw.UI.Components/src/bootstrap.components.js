require("../libs/angular");
require("./utilities/component-extension");
require("./bootstrap.store");
require("./bootstrap.services");
var gallery_component_1 = require("./components/gallery.component");
var app = angular.module("shaw.components", [
    "shaw.services",
    "shaw.store"
]);
app.component(gallery_component_1.GalleryComponent);
