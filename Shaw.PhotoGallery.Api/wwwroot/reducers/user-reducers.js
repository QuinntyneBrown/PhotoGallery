var actions_1 = require("../actions");
exports.userLoggedInReducer = function (state, action) {
    if (action instanceof actions_1.UserLoggedInAction) {
        state.token = action.userData.access_token;
    }
    return state;
};
//# sourceMappingURL=user-reducers.js.map