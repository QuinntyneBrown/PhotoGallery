require("../libs/angular");
require("./utilities/component-extension");
require("./bootstrap.services");

import { PhotoGalleryComponent } from "./components/photo-gallery.component";

var app: any = angular.module("shaw.components", [
    "shaw.services"
]);

app.component(PhotoGalleryComponent); 