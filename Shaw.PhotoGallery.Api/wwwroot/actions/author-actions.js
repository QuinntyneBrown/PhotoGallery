var AuthorActionCreator = (function () {
    function AuthorActionCreator(authorService, dispatcher, guid) {
        var _this = this;
        this.authorService = authorService;
        this.dispatcher = dispatcher;
        this.guid = guid;
        this.getById = function (options) {
            var newId = _this.guid();
            _this.authorService.get().then(function (results) {
                var action = new AddOrUpdateAuthorAction(newId, results);
                _this.dispatcher.dispatch(action);
            });
            return newId;
        };
        this.all = function () {
            var newId = _this.guid();
            _this.authorService.get().then(function (results) {
                var action = new AllAuthorsAction(newId, results);
                _this.dispatcher.dispatch(action);
            });
            return newId;
        };
        this.add = function (options) {
            var newId = _this.guid();
            _this.authorService.add({ data: options.data }).then(function (results) {
                var action = new AddOrUpdateAuthorAction(newId, results);
                _this.dispatcher.dispatch(action);
            });
            return newId;
        };
    }
    return AuthorActionCreator;
})();
exports.AuthorActionCreator = AuthorActionCreator;
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
//# sourceMappingURL=author-actions.js.map