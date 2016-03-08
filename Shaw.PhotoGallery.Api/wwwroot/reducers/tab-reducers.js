var actions_1 = require("../actions");
exports.setCurrentTabReducer = function (state, action) {
    if (action instanceof actions_1.SetCurrentTabAction) {
        state.tabIndex[action.tabName] = action.index;
        state.lastTriggeredByAction = actions_1.SetCurrentTabAction;
    }
    return state;
};
exports.tabChildLoadedReducer = function (state, action) {
    if (action instanceof actions_1.TabChildLoadedAction) {
        state.lastTriggeredByAction = actions_1.TabChildLoadedAction;
    }
    return state;
};
//# sourceMappingURL=tab-reducers.js.map