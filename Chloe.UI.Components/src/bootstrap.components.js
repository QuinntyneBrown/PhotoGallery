require("../libs/angular");
require("./utilities/component-extension");
require("./bootstrap.store");
require("./bootstrap.services");
var gallery_component_1 = require("./components/gallery.component");
var app = angular.module("chloe.components", [
    "chloe.services",
    "chloe.store"
]);
app.component(gallery_component_1.GalleryComponent);
//# sourceMappingURL=bootstrap.components.js.map