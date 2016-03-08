/// <reference path="../typings/tsd.d.ts" />
require("./bootstrap.services");
require("./bootstrap.actions");
require("./bootstrap.components");
require("./bootstrap.reducers");
var app = angular.module("galleryManagerApp", [
    "addOrUpdate",
    "apiEndpoint",
    "authInterceptor",
    "fetch",
    "formEncode",
    "invokeAsync",
    "localStorageManager",
    "loginRedirect",
    "routeResolver",
    "routeWhenExtension",
    "safeDigest",
    "store",
    "actions",
    "components",
    "reducers",
    "services",
    "ui.tinymce"
]);
app.config(["$routeProvider", "apiEndpointProvider", "initialStateProvider", "localStorageManagerProvider", function ($routeProvider, apiEndpointProvider, initialStateProvider, localStorageManagerProvider) {
        var localStorageInitialState = localStorageManagerProvider.get({ name: "initialState" });
        if (!localStorageInitialState)
            localStorageManagerProvider.put({
                name: "initialState", value: {
                    brands: [],
                    galleries: [],
                    photos: [],
                    tags: [],
                    users: [],
                    tabIndex: {},
                    token: null,
                    currentUser: null
                }
            });
        initialStateProvider.configure(localStorageManagerProvider.get({ name: "initialState" }));
        apiEndpointProvider.configure("/api");
        $routeProvider
            .when("/", { template: "<login></login>" })
            .when("/author/list", { template: "<author-list></author-list>" })
            .when("/brand/list", { template: "<brand-list></brand-list>" })
            .when("/description/list", { template: "<description-list></description-list>" })
            .when("/gallery/list", { template: "<gallery-list></gallery-list>" })
            .when("/photo/list", { template: "<photo-list></photo-list>" })
            .when("/photo/upload/:galleryId", { template: "<photo-upload></photo-upload>" })
            .when("/sponsor/list", { template: "<sponsor-list></sponsor-list>" })
            .when("/tag/list", { template: "<tag-list></tag-list>" })
            .otherwise("/");
    }]).config(["loginRedirectProvider", function (loginRedirectProvider) { return loginRedirectProvider.setDefaultUrl("/gallery/list"); }]);
//# sourceMappingURL=bootstrap.js.map