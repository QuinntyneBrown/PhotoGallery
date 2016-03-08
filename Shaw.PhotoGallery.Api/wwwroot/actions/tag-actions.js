var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_actions_1 = require("./base-actions");
var TagActionCreator = (function (_super) {
    __extends(TagActionCreator, _super);
    function TagActionCreator($location, dispatcher, guid, tagService) {
        _super.call(this, $location, tagService, dispatcher, guid, AddOrUpdateTagAction, AllTagsAction, RemoveTagAction);
    }
    return TagActionCreator;
})(base_actions_1.BaseActionCreator);
exports.TagActionCreator = TagActionCreator;
var SetCurrentTagAction = (function () {
    function SetCurrentTagAction(entity) {
        this.entity = entity;
    }
    return SetCurrentTagAction;
})();
exports.SetCurrentTagAction = SetCurrentTagAction;
var AddOrUpdateTagAction = (function () {
    function AddOrUpdateTagAction(id, entity) {
        this.id = id;
        this.entity = entity;
    }
    return AddOrUpdateTagAction;
})();
exports.AddOrUpdateTagAction = AddOrUpdateTagAction;
var AllTagsAction = (function () {
    function AllTagsAction(id, entities) {
        this.id = id;
        this.entities = entities;
    }
    return AllTagsAction;
})();
exports.AllTagsAction = AllTagsAction;
var RemoveTagAction = (function () {
    function RemoveTagAction(id, entityId) {
        this.id = id;
        this.entityId = entityId;
    }
    return RemoveTagAction;
})();
exports.RemoveTagAction = RemoveTagAction;
var TagsFilterAction = (function () {
    function TagsFilterAction(id, term) {
        this.id = id;
        this.term = term;
    }
    return TagsFilterAction;
})();
exports.TagsFilterAction = TagsFilterAction;
//# sourceMappingURL=tag-actions.js.map