var actions_1 = require("../actions");
var libs_1 = require("../../libs");
exports.removeGalleryReducer = function (state, action) {
    if (action instanceof actions_1.RemoveGalleryAction)
        libs_1.pluckOut({ items: state.galleries, value: action.entity.id });
    return state;
};
exports.addGalleryReducer = function (state, action) {
    if (action instanceof actions_1.AddOrUpdateGalleryAction) {
        libs_1.addOrUpdate({ items: state.galleries, item: action.entity });
    }
    return state;
};
exports.allGalleriesReducer = function (state, action) {
    if (action instanceof actions_1.AllGalleriesAction) {
        state.galleries = action.entities;
    }
    return state;
};
//# sourceMappingURL=gallery-reducers.js.map