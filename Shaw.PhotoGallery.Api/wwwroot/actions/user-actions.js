var UserActionCreator = (function () {
    function UserActionCreator(dispatcher, guid, userService) {
        var _this = this;
        this.dispatcher = dispatcher;
        this.guid = guid;
        this.userService = userService;
        this.tryToLogin = function (options) {
            var newId = _this.guid();
            _this.userService.tryToLogin({
                data: {
                    username: options.username,
                    password: options.password
                }
            }).then(function (results) {
                _this.dispatcher.dispatch(new UserLoggedInAction(newId, results));
            });
            return newId;
        };
    }
    return UserActionCreator;
})();
exports.UserActionCreator = UserActionCreator;
var AddUserAction = (function () {
    function AddUserAction(entity) {
        this.entity = entity;
    }
    return AddUserAction;
})();
exports.AddUserAction = AddUserAction;
var AllUsersAction = (function () {
    function AllUsersAction(entities) {
        this.entities = entities;
    }
    return AllUsersAction;
})();
exports.AllUsersAction = AllUsersAction;
var RemoveUserAction = (function () {
    function RemoveUserAction(id) {
        this.id = id;
    }
    return RemoveUserAction;
})();
exports.RemoveUserAction = RemoveUserAction;
var UsersFilterAction = (function () {
    function UsersFilterAction(term) {
        this.term = term;
    }
    return UsersFilterAction;
})();
exports.UsersFilterAction = UsersFilterAction;
var UserLoggedInAction = (function () {
    function UserLoggedInAction(id, userData) {
        this.id = id;
        this.userData = userData;
    }
    return UserLoggedInAction;
})();
exports.UserLoggedInAction = UserLoggedInAction;
//# sourceMappingURL=user-actions.js.map