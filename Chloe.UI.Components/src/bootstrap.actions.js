var gallery_actions_1 = require("./actions/gallery-actions");
require("../libs/angular");
var app = angular.module("chloe.actions", []);
app.service("galleryActionCreator", ["dispatcher", "galleryService", "guid", gallery_actions_1.GalleryActionCreator]);
//# sourceMappingURL=bootstrap.actions.js.map