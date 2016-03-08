var PhotoActionCreator = (function () {
    function PhotoActionCreator(photoService, dispatcher, guid) {
        var _this = this;
        this.photoService = photoService;
        this.dispatcher = dispatcher;
        this.guid = guid;
        this.getById = function (options) {
            var newId = _this.guid();
            _this.photoService.get().then(function (results) {
                var action = new AddOrUpdatePhotoAction(newId, results);
                _this.dispatcher.dispatch(action);
            });
            return newId;
        };
        this.get = function () {
            var newId = _this.guid();
            _this.photoService.get().then(function (results) {
                var action = new AllPhotosAction(newId, results);
                _this.dispatcher.dispatch(action);
            });
            return newId;
        };
        this.add = function (options) {
            var newId = _this.guid();
            _this.photoService.add({ data: options.data }).then(function (results) {
                var action = new AddOrUpdatePhotoAction(newId, results);
                _this.dispatcher.dispatch(action);
            });
            return newId;
        };
    }
    return PhotoActionCreator;
})();
exports.PhotoActionCreator = PhotoActionCreator;
var AddOrUpdatePhotoAction = (function () {
    function AddOrUpdatePhotoAction(id, entity) {
        this.id = id;
        this.entity = entity;
    }
    return AddOrUpdatePhotoAction;
})();
exports.AddOrUpdatePhotoAction = AddOrUpdatePhotoAction;
var AllPhotosAction = (function () {
    function AllPhotosAction(id, entities) {
        this.id = id;
        this.entities = entities;
    }
    return AllPhotosAction;
})();
exports.AllPhotosAction = AllPhotosAction;
var RemovePhotoAction = (function () {
    function RemovePhotoAction(id, entityId) {
        this.id = id;
        this.entityId = entityId;
    }
    return RemovePhotoAction;
})();
exports.RemovePhotoAction = RemovePhotoAction;
var PhotosFilterAction = (function () {
    function PhotosFilterAction(id, term) {
        this.id = id;
        this.term = term;
    }
    return PhotosFilterAction;
})();
exports.PhotosFilterAction = PhotosFilterAction;
var SetCurrentPhotoAction = (function () {
    function SetCurrentPhotoAction(id, entityId) {
        this.id = id;
        this.entityId = entityId;
    }
    return SetCurrentPhotoAction;
})();
exports.SetCurrentPhotoAction = SetCurrentPhotoAction;
//# sourceMappingURL=photo-actions.js.map