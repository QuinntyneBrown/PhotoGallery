var GalleryActionCreator = (function () {
    function GalleryActionCreator(dispatcher, galleryService, guid) {
        this.select = function (options) {
        };
        this.next = function (options) {
        };
        this.previous = function (options) {
        };
    }
    return GalleryActionCreator;
})();
exports.GalleryActionCreator = GalleryActionCreator;
var GallerySelectedAction = (function () {
    function GallerySelectedAction() {
    }
    return GallerySelectedAction;
})();
exports.GallerySelectedAction = GallerySelectedAction;
var NextPhotoAction = (function () {
    function NextPhotoAction() {
    }
    return NextPhotoAction;
})();
exports.NextPhotoAction = NextPhotoAction;
var PreviousPhotoAction = (function () {
    function PreviousPhotoAction() {
    }
    return PreviousPhotoAction;
})();
exports.PreviousPhotoAction = PreviousPhotoAction;
//# sourceMappingURL=gallery-actions.js.map