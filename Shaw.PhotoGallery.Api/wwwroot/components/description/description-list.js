var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var component_decorators_1 = require("../../../libs/component-decorators");
var descriptionListComponent = (function () {
    function descriptionListComponent($location, descriptionActionCreator) {
        var _this = this;
        this.$location = $location;
        this.descriptionActionCreator = descriptionActionCreator;
        this.storeOnChange = function (state) { return _this.entities = state.descriptions; };
        this.remove = function (description) { return _this.descriptionActionCreator.remove({ description: description }); };
    }
    descriptionListComponent = __decorate([
        component_decorators_1.Component({
            route: "/description/list",
            templateUrl: "wwwroot/components/description/description-list.html",
            selector: "description-list",
            providers: ["$location", "descriptionActionCreator"]
        }),
        component_decorators_1.CanActivate([
            "descriptionActionCreator", "invokeAsync",
            function (descriptionActionCreator, invokeAsync) { return invokeAsync(descriptionActionCreator.all); }
        ]), 
        __metadata('design:paramtypes', [Object, Object])
    ], descriptionListComponent);
    return descriptionListComponent;
})();
exports.descriptionListComponent = descriptionListComponent;
//# sourceMappingURL=description-list.js.map