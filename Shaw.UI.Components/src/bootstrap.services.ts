require("../libs/angular");

import * as services  from "./services/overlay";

var app = angular.module("shaw.services", []);

app.service("overlay", [services.Overlay]);