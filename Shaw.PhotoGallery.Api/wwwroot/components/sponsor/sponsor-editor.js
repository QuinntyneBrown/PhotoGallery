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
var sponsorEditorComponent = (function () {
    function sponsorEditorComponent($location, sponsorActionCreator, invokeAsync) {
        var _this = this;
        this.$location = $location;
        this.sponsorActionCreator = sponsorActionCreator;
        this.invokeAsync = invokeAsync;
        this.storeOnChange = function (state) { };
        this.addOrUpdate = function () {
            _this.invokeAsync({
                action: _this.sponsorActionCreator.addOrUpdate,
                params: {
                    data: {
                        id: _this.id,
                        name: _this.name,
                        description: _this.description
                    }
                }
            }).then(function () {
                if (!_this.id && _this.entities.filter(function (entity) { return entity.name === _this.name; }).length > 0) {
                }
                else {
                }
            });
        };
        this.remove = function () { return _this.sponsorActionCreator.remove({ id: _this.id }); };
    }
    sponsorEditorComponent = __decorate([
        component_decorators_1.Component({
            route: "/sponsor/edit/:id",
            templateUrl: "wwwroot/components/sponsor/sponsor-editor.html",
            selector: "sponsor-editor",
            providers: ["$location", "sponsorActionCreator", "invokeAsync"]
        }),
        component_decorators_1.CanActivate(["$route", "invokeAsync", "sponsorActionCreator", function ($route, invokeAsync, sponsorActionCreator) {
                var id = $route.current.params.id;
                return invokeAsync({
                    action: sponsorActionCreator.getById,
                    params: { id: id }
                });
            }]), 
        __metadata('design:paramtypes', [Object, Object, Object])
    ], sponsorEditorComponent);
    return sponsorEditorComponent;
})();
exports.sponsorEditorComponent = sponsorEditorComponent;
//# sourceMappingURL=sponsor-editor.js.map