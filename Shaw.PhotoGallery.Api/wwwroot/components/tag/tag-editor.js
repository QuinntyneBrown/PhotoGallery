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
var TagEditorComponent = (function () {
    function TagEditorComponent($location, $routeParams, invokeAsync, tagActionCreator) {
        var _this = this;
        this.$location = $location;
        this.$routeParams = $routeParams;
        this.invokeAsync = invokeAsync;
        this.tagActionCreator = tagActionCreator;
        this.storeOnChange = function (state) {
            if (state.lastTriggeredByAction == actions_1.RemoveTagAction && _this.entities.filter(function (entity) { return entity.id === _this.id; }).length < 1)
                _this.$location.path(_this.baseUrl + "/list");
            _this.entities = state.tags;
        };
        this.ngOnInit = function () {
            if (_this.$routeParams["id"])
                angular.extend(_this, angular.copy(_this.entities.filter(function (entity) { return entity.id == _this.$routeParams["id"]; })[0]));
        };
        this.addOrUpdate = function () {
            alert("QB");
            _this.invokeAsync({
                action: _this.tagActionCreator.addOrUpdate,
                params: {
                    data: {
                        id: _this.id,
                        name: _this.name,
                        description: _this.description,
                    }
                }
            }).then(function () {
                if (!_this.id && _this.entities.filter(function (entity) { return entity.name === _this.name; }).length > 0) {
                    _this.$location.path(_this.baseUrl + "/edit/" + _this.entities.filter(function (entity) { return entity.name === _this.name; })[0].id);
                }
                else {
                }
            });
        };
        this.remove = function () { return _this.tagActionCreator.remove({ id: _this.id }); };
    }
    Object.defineProperty(TagEditorComponent.prototype, "baseUrl", {
        get: function () { return "/tag"; },
        enumerable: true,
        configurable: true
    });
    TagEditorComponent.canActivate = function () {
        return ["$route", "invokeAsync", "tagActionCreator", function ($route, invokeAsync, tagActionCreator) {
                var id = $route.current.params.id;
                return invokeAsync({
                    action: tagActionCreator.getById,
                    params: { id: id }
                });
            }];
    };
    TagEditorComponent = __decorate([
        component_decorators_1.Component({
            route: "/tag/edit/:id",
            templateUrl: "wwwroot/components/tag/tag-editor.html",
            selector: "tag-editor",
            providers: ["$location", "$routeParams", "invokeAsync", "tagActionCreator"]
        }),
        component_decorators_1.CanActivate(["$route", "invokeAsync", "$routeParams", "tagActionCreator", function ($route, invokeAsync, tagActionCreator) {
                var id = $route.current.params.id;
                return invokeAsync({
                    action: tagActionCreator.getById,
                    params: { id: id }
                });
            }]), 
        __metadata('design:paramtypes', [Object, Object, Object, actions_1.TagActionCreator])
    ], TagEditorComponent);
    return TagEditorComponent;
})();
exports.TagEditorComponent = TagEditorComponent;
//# sourceMappingURL=tag-editor.js.map