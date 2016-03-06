import * as utilities from "./utilities";
require("../libs/angular");


angular.module("shaw.store", [])
    .provider("localStorageManager",utilities.LocalStorageManagerProvider)
    .service("store", ["dispatcher", "initialState", "localStorageManager", "reducers", utilities.Store])
    .service("dispatcher", [utilities.Dispatcher])
    .provider("reducers", utilities.ReducersProvider)
    .provider("initialState", utilities.InitialStateProvider)
    .value("guid", utilities.guid)
    .run(["store", store => {
        alert("works?");        
    }]);