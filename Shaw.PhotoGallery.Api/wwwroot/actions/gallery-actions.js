var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_actions_1 = require("./base-actions");
var GalleryActionCreator = (function (_super) {
    __extends(GalleryActionCreator, _super);
    function GalleryActionCreator($location, dispatcher, galleryService, guid) {
        _super.call(this, $location, galleryService, dispatcher, guid, AddOrUpdateGalleryAction, AllGalleriesAction, RemoveGalleryAction);
    }
    return GalleryActionCreator;
})(base_actions_1.BaseActionCreator);
exports.GalleryActionCreator = GalleryActionCreator;
var AddOrUpdateGalleryAction = (function () {
    function AddOrUpdateGalleryAction(id, entity) {
        this.id = id;
        this.entity = entity;
    }
    return AddOrUpdateGalleryAction;
})();
exports.AddOrUpdateGalleryAction = AddOrUpdateGalleryAction;
var AllGalleriesAction = (function () {
    function AllGalleriesAction(id, entities) {
        this.id = id;
        this.entities = entities;
    }
    return AllGalleriesAction;
})();
exports.AllGalleriesAction = AllGalleriesAction;
var RemoveGalleryAction = (function () {
    function RemoveGalleryAction(id, entity) {
        this.id = id;
        this.entity = entity;
    }
    return RemoveGalleryAction;
})();
exports.RemoveGalleryAction = RemoveGalleryAction;
var GallerysFilterAction = (function () {
    function GallerysFilterAction(id, term) {
        this.id = id;
        this.term = term;
    }
    return GallerysFilterAction;
})();
exports.GallerysFilterAction = GallerysFilterAction;
var SetCurrentGalleryAction = (function () {
    function SetCurrentGalleryAction(id, entityId) {
        this.id = id;
        this.entityId = entityId;
    }
    return SetCurrentGalleryAction;
})();
exports.SetCurrentGalleryAction = SetCurrentGalleryAction;
//# sourceMappingURL=gallery-actions.js.map