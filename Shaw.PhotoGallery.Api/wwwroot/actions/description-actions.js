var DescriptionActionCreator = (function () {
    function DescriptionActionCreator(descriptionService, dispatcher, guid) {
        var _this = this;
        this.descriptionService = descriptionService;
        this.dispatcher = dispatcher;
        this.guid = guid;
        this.getById = function (options) {
            var newId = _this.guid();
            _this.descriptionService.get().then(function (results) {
                var action = new AddOrUpdateDescriptionAction(newId, results);
                _this.dispatcher.dispatch(action);
            });
            return newId;
        };
        this.get = function () {
            var newId = _this.guid();
            _this.descriptionService.get().then(function (results) {
                var action = new AllDescriptionsAction(newId, results);
                _this.dispatcher.dispatch(action);
            });
            return newId;
        };
        this.addDescription = function (options) {
            var newId = _this.guid();
            _this.descriptionService.add({ data: options.data }).then(function (results) {
                var action = new AddOrUpdateDescriptionAction(newId, results);
                _this.dispatcher.dispatch(action);
            });
            return newId;
        };
    }
    return DescriptionActionCreator;
})();
exports.DescriptionActionCreator = DescriptionActionCreator;
var AddOrUpdateDescriptionAction = (function () {
    function AddOrUpdateDescriptionAction(id, entity) {
        this.id = id;
        this.entity = entity;
    }
    return AddOrUpdateDescriptionAction;
})();
exports.AddOrUpdateDescriptionAction = AddOrUpdateDescriptionAction;
var AllDescriptionsAction = (function () {
    function AllDescriptionsAction(id, entities) {
        this.id = id;
        this.entities = entities;
    }
    return AllDescriptionsAction;
})();
exports.AllDescriptionsAction = AllDescriptionsAction;
var RemoveDescriptionAction = (function () {
    function RemoveDescriptionAction(id, entityId) {
        this.id = id;
        this.entityId = entityId;
    }
    return RemoveDescriptionAction;
})();
exports.RemoveDescriptionAction = RemoveDescriptionAction;
var DescriptionsFilterAction = (function () {
    function DescriptionsFilterAction(id, term) {
        this.id = id;
        this.term = term;
    }
    return DescriptionsFilterAction;
})();
exports.DescriptionsFilterAction = DescriptionsFilterAction;
var SetCurrentDescriptionAction = (function () {
    function SetCurrentDescriptionAction(id, entityId) {
        this.id = id;
        this.entityId = entityId;
    }
    return SetCurrentDescriptionAction;
})();
exports.SetCurrentDescriptionAction = SetCurrentDescriptionAction;
//# sourceMappingURL=description-actions.js.map