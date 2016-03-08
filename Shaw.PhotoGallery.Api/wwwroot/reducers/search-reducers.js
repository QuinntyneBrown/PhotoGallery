var actions_1 = require("../actions");
exports.queryReducer = function (state, action) {
    if (action instanceof actions_1.SearchQueryAction) {
        state.searchResults = action.results.results;
        state.searchTerm = action.term;
        state.lastTriggeredByAction = actions_1.SearchQueryAction;
    }
    return state;
};
//# sourceMappingURL=search-reducers.js.map