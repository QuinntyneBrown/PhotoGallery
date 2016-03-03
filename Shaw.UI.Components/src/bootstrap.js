/// <reference path="../typings/tsd.d.ts" />
require("../libs/angular");
require("./bootstrap.store");
require("./bootstrap.components");
require("./bootstrap.services");
require("./bootstrap.utilities");
var app = angular.module("shaw.components.library", [
    "shaw.components",
    "shaw.services",
    "shaw.utilities",
    "shaw.store"
]);
//# sourceMappingURL=bootstrap.js.map