import * as reducers from "./reducers";

var app = (<any>angular.module("reducers", [
    "store"
]));

app.config(["reducersProvider", reducersProvider => {
    reducersProvider.configure(reducers.addGalleryReducer);
    reducersProvider.configure(reducers.allGalleriesReducer);
    reducersProvider.configure(reducers.removeGalleryReducer);
    reducersProvider.configure(reducers.userLoggedInReducer);
    reducersProvider.configure(reducers.setCurrentTabReducer);
    reducersProvider.configure(reducers.tabChildLoadedReducer);
}])