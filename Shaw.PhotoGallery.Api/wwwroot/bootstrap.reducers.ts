import { addGalleryReducer, allGalleriesReducer, removeGalleryReducer, userLoggedInReducer } from "./reducers";

var app = (<any>angular.module("reducers", [
    "store"
]));

app.config(["reducersProvider", reducersProvider => {
    reducersProvider.configure(addGalleryReducer);
    reducersProvider.configure(allGalleriesReducer);
    reducersProvider.configure(removeGalleryReducer);
    reducersProvider.configure(userLoggedInReducer);
}])