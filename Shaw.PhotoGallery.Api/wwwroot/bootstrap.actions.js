var actions = require("./actions");
var app = angular.module("actions", ["services", "store"]);
app.service("authorActionCreator", ["authorService", "dispatcher", "guid", actions.AuthorActionCreator]);
app.service("brandActionCreator", ["brandService", "dispatcher", "guid", actions.BrandActionCreator]);
app.service("galleryActionCreator", ["$location", "dispatcher", "galleryService", "guid", actions.GalleryActionCreator]);
app.service("tabActionCreator", ["dispatcher", actions.TabActionCreator]);
app.service("tagActionCreator", ["$location", "dispatcher", "guid", "tagService", actions.TagActionCreator]);
app.service("userActionCreator", ["dispatcher", "guid", "userService", actions.UserActionCreator]);
app.service("photoActionCreator", ["photoService", "dispatcher", "guid", actions.PhotoActionCreator]);
//# sourceMappingURL=bootstrap.actions.js.map