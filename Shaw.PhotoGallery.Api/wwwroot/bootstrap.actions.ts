import * as actions from "./actions";

var app = (<any>angular.module("actions", ["services","store"]));

app.service("authorActionCreator", ["authorService", "dispatcher", "guid", actions.AuthorActionCreator]);
app.service("brandActionCreator", ["brandService", "dispatcher", "guid", actions.BrandActionCreator]);
app.service("galleryActionCreator", ["dispatcher", "galleryService", "guid", actions.GalleryActionCreator]);
app.service("tagActionCreator", ["tagService", "dispatcher", "guid", actions.TagActionCreator]);
app.service("userActionCreator", ["dispatcher", "guid", "userService", actions.UserActionCreator]);
app.service("photoActionCreator", ["photoService", "dispatcher", "guid", actions.PhotoActionCreator]);