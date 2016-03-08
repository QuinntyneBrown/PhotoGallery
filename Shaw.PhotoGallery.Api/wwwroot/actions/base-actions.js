var BaseActionCreator = (function () {
    function BaseActionCreator($location, service, dispatcher, guid, addOrUpdateAction, allAction, removeAction) {
        var _this = this;
        this.$location = $location;
        this.service = service;
        this.dispatcher = dispatcher;
        this.guid = guid;
        this.addOrUpdateAction = addOrUpdateAction;
        this.allAction = allAction;
        this.removeAction = removeAction;
        this.getById = function (options) {
            var newId = _this.guid();
            _this.service.get().then(function (results) {
                var action = new _this.addOrUpdateAction(newId, results);
                _this.dispatcher.dispatch(action);
            });
            return newId;
        };
        this.all = function () {
            var newId = _this.guid();
            _this.service.get().then(function (results) {
                var action = new _this.allAction(newId, results);
                _this.dispatcher.dispatch(action);
            });
            return newId;
        };
        this.addOrUpdate = function (options) {
            var newId = _this.guid();
            _this.service.add({ data: options.data }).then(function (results) {
                var action = new _this.addOrUpdateAction(newId, results);
                _this.dispatcher.dispatch(action);
            });
            return newId;
        };
        this.remove = function (options) {
            var newId = _this.guid();
            _this.service.remove({
                id: options.entity.id
            }).then(function (results) {
                _this.dispatcher.dispatch(new _this.removeAction(newId, options.entity));
            });
            return newId;
        };
        this.edit = function (options) { };
        this.baseUrl = "/gallery/";
    }
    return BaseActionCreator;
})();
exports.BaseActionCreator = BaseActionCreator;
var AddOrUpdateAuthorAction = (function () {
    function AddOrUpdateAuthorAction(id, entity) {
        this.id = id;
        this.entity = entity;
    }
    return AddOrUpdateAuthorAction;
})();
exports.AddOrUpdateAuthorAction = AddOrUpdateAuthorAction;
var AllAuthorsAction = (function () {
    function AllAuthorsAction(id, entities) {
        this.id = id;
        this.entities = entities;
    }
    return AllAuthorsAction;
})();
exports.AllAuthorsAction = AllAuthorsAction;
var RemoveAuthorAction = (function () {
    function RemoveAuthorAction(id, entityId) {
        this.id = id;
        this.entityId = entityId;
    }
    return RemoveAuthorAction;
})();
exports.RemoveAuthorAction = RemoveAuthorAction;
var AuthorsFilterAction = (function () {
    function AuthorsFilterAction(id, term) {
        this.id = id;
        this.term = term;
    }
    return AuthorsFilterAction;
})();
exports.AuthorsFilterAction = AuthorsFilterAction;
var SetCurrentAuthorAction = (function () {
    function SetCurrentAuthorAction(id, entityId) {
        this.id = id;
        this.entityId = entityId;
    }
    return SetCurrentAuthorAction;
})();
exports.SetCurrentAuthorAction = SetCurrentAuthorAction;
//# sourceMappingURL=base-actions.js.map