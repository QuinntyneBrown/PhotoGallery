var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var actions_1 = require("../../actions");
var component_decorators_1 = require("../../../libs/component-decorators");
var TagListComponent = (function () {
    function TagListComponent(tagActionCreator) {
        var _this = this;
        this.tagActionCreator = tagActionCreator;
        this.storeOnChange = function (state) { return _this.entities = state.tags; };
        this.remove = function (entity) { return _this.tagActionCreator.remove({ entity: entity }); };
    }
    TagListComponent = __decorate([
        component_decorators_1.Component({
            route: "/tag/list",
            templateUrl: "wwwroot/components/tag/tag-list.html",
            selector: "tag-list",
            providers: ["tagActionCreator"]
        }),
        component_decorators_1.CanActivate([
            "tagActionCreator", "invokeAsync",
            function (tagActionCreator, invokeAsync) { return invokeAsync(tagActionCreator.all); }
        ]), 
        __metadata('design:paramtypes', [actions_1.TagActionCreator])
    ], TagListComponent);
    return TagListComponent;
})();
exports.TagListComponent = TagListComponent;
//# sourceMappingURL=tag-list.js.map