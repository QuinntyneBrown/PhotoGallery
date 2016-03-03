var utilities = require("./utilities");
angular.module("shaw.store", ["localStorageManager"])
    .service("store", ["dispatcher", "initialState", "localStorageManager", "reducers", utilities.Store])
    .service("dispatcher", [utilities.Dispatcher])
    .provider("reducers", utilities.ReducersProvider)
    .provider("initialState", utilities.InitialStateProvider)
    .value("guid", utilities.guid)
    .run(["store", function (store) { }]);
//# sourceMappingURL=bootstrap.store.js.map