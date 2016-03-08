require("../libs/angular");
require("./utilities/component-extension");
require("./bootstrap.store");
require("./bootstrap.services");

import { GalleryComponent } from "./components/gallery.component";

var app = (angular as any).module("chloe.components", [
    "chloe.services",
    "chloe.store"
]);

app.component(GalleryComponent); 