var reducers = require("./reducers");
var app = angular.module("reducers", [
    "store"
]);
app.config(["reducersProvider", function (reducersProvider) {
        reducersProvider.configure(reducers.addGalleryReducer);
        reducersProvider.configure(reducers.allGalleriesReducer);
        reducersProvider.configure(reducers.removeGalleryReducer);
        reducersProvider.configure(reducers.userLoggedInReducer);
        reducersProvider.configure(reducers.setCurrentTabReducer);
        reducersProvider.configure(reducers.tabChildLoadedReducer);
    }]);
//# sourceMappingURL=bootstrap.reducers.js.map