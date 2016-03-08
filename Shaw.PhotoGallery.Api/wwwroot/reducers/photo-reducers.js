var libs_1 = require("../../libs");
var actions_1 = require("../actions");
exports.addPhotoReducer = function (state, action) {
    if (action instanceof actions_1.AddOrUpdatePhotoAction) {
        libs_1.addOrUpdate({ items: state.photos, item: action.entity });
    }
    return state;
};
exports.allPhotosReducer = function (state, action) {
    if (action instanceof actions_1.AllPhotosAction) {
        state.photos = action.entities;
    }
    return state;
};
exports.removePhotoReducer = function (state, action) {
    if (action instanceof actions_1.RemovePhotoAction)
        libs_1.pluckOut({ items: state.galleries, value: action.entity });
    return state;
};
//# sourceMappingURL=photo-reducers.js.map