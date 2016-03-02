/// <reference path="typings/tsd.d.ts" />

require("./libs/angular");
require("./libs/component-extension");

import { PhotoGalleryComponent } from "./components/photo-gallery/photo-gallery.component";

var app: any = angular.module("photoGalleryApp", []);

app.component(PhotoGalleryComponent);

angular.element(document).ready(() =>  angular.bootstrap(document.getElementById("photo-gallery-app"), ['photoGalleryApp']));
 