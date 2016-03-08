import { GalleryActionCreator } from "./actions/gallery-actions";

require("../libs/angular");

var app: any = angular.module("chloe.actions", []);

app.service("galleryActionCreator", ["dispatcher", "galleryService","guid",GalleryActionCreator]);