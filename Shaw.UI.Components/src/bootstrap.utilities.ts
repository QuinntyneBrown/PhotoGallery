﻿require("../libs/angular");
require("./utilities/safe-digest");
require("./utilities/routeresolver");
require("./utilities/route-when-extension");
require("../libs/angular-route.min");

import * as utilities from "./utilities";

var app: any = angular.module("shaw.utilities", [
    "ngRoute",
    "routeResolver",
    "routeWhenExtension",
    "safeDigest"]);


app.value("appendToBodyAsync", utilities.appendToBodyAsync);
app.value("extendCssAsync", utilities.extendCssAsync);
app.value("removeElement", utilities.removeElement);
app.value("setOpacityAsync", utilities.setOpacityAsync);

//app.service("breakPointManager", [services.BreakPointManager])
//    .config(["breakPointManager", breakPointManager => { }]);