import { BrandActionCreator, GalleryActionCreator, PhotoActionCreator, TagActionCreator, UserActionCreator } from "./actions";

var app = (<any>angular.module("actions", ["services","store"]));

app.service("brandActionCreator", ["brandService", "dispatcher", "guid", BrandActionCreator]);
app.service("galleryActionCreator", ["dispatcher", "galleryService", "guid", GalleryActionCreator]);
app.service("tagActionCreator", ["tagService", "dispatcher", "guid", TagActionCreator]);
app.service("userActionCreator", ["dispatcher", "guid", "userService", UserActionCreator]);
app.service("photoActionCreator", ["photoService", "dispatcher", "guid", PhotoActionCreator]);