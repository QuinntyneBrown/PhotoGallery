var actions_1 = require("../actions");
var libs_1 = require("../../libs");
exports.addTagReducer = function (state, action) {
    if (action instanceof actions_1.AddOrUpdateTagAction) {
        libs_1.addOrUpdate({ items: state.photos, item: action.entity });
    }
    return state;
};
exports.allTagsReducer = function (state, action) {
    if (action instanceof actions_1.AllTagsAction) {
        state.tags = action.entities;
    }
    return state;
};
exports.removeTagReducer = function (state, action) {
    if (action instanceof actions_1.RemoveTagAction)
        libs_1.pluckOut({ items: state.galleries, value: action.entity });
    return state;
};
//# sourceMappingURL=tag-reducers.js.map