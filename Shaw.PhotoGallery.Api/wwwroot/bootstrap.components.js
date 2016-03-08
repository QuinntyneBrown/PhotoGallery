var components = require("./components");
var app = angular.module("components", ["store"]);
for (var componentName in components) {
    app.component(components[componentName].config);
}
//# sourceMappingURL=bootstrap.components.js.map