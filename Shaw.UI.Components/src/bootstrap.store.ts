import * as utilities from "./utilities";

angular.module("shaw.store", ["localStorageManager"])
    .service("store", ["dispatcher", "initialState", "localStorageManager", "reducers", utilities.Store])
    .service("dispatcher", [utilities.Dispatcher])
    .provider("reducers", utilities.ReducersProvider)
    .provider("initialState", utilities.InitialStateProvider)
    .value("guid", utilities.guid)
    .run(["store", store => { }]);