require("../libs/angular");
require("./utilities/component-extension");
require("./bootstrap.store");
require("./bootstrap.services");


import { PhotoGalleryComponent } from "./components/photo-gallery.component";

var app: any = angular.module("shaw.components", [
    "shaw.services",
    "shaw.store"
]);

app.component(PhotoGalleryComponent); 