require("../libs/angular");
require("./utilities/safe-digest");
require("./utilities/routeresolver");
require("./utilities/route-when-extension");
require("../libs/angular-route.min");
var utilities = require("./utilities");
var app = angular.module("shaw.utilities", [
    "ngRoute",
    "routeResolver",
    "routeWhenExtension",
    "safeDigest"]);
app.provider("localStorageManager", utilities.LocalStorageManagerProvider);
app.service("fetch", ["$http", "$q", "localStorageManager", utilities.fetch]);
app.value("appendToBodyAsync", utilities.appendToBodyAsync);
app.value("extendCssAsync", utilities.extendCssAsync);
app.value("removeElement", utilities.removeElement);
app.value("setOpacityAsync", utilities.setOpacityAsync);
//app.service("breakPointManager", [services.BreakPointManager])
//    .config(["breakPointManager", breakPointManager => { }]); 
