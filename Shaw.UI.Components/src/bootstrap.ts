/// <reference path="../typings/tsd.d.ts" />
require("../libs/angular");
require("./bootstrap.components");
require("./bootstrap.services");
require("./bootstrap.utilities");

var app: any = angular.module("shaw.components.library", [
    "shaw.components",
    "shaw.services",
    "shaw.utilities"
]);




 