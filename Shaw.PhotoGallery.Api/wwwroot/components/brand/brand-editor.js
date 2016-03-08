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
var BrandEditorComponent = (function () {
    function BrandEditorComponent($location, brandActionCreator, invokeAsync) {
        var _this = this;
        this.$location = $location;
        this.brandActionCreator = brandActionCreator;
        this.invokeAsync = invokeAsync;
        this.storeOnChange = function (state) {
            _this.id = null;
            _this.name = null;
            _this.photos = [];
            _this.brandName = null;
        };
        this.addOrUpdate = function () {
            _this.invokeAsync({
                action: _this.brandActionCreator.addOrUpdate,
                params: {
                    id: _this.id,
                    name: _this.name,
                    description: _this.description
                }
            }).then(function () {
                if (!_this.id && _this.entities.filter(function (entity) { return entity.name === _this.name; }).length > 0) {
                }
                else {
                }
            });
        };
        this.remove = function () { return _this.brandActionCreator.remove({ id: _this.id }); };
    }
    BrandEditorComponent = __decorate([
        component_decorators_1.Component({
            route: "/brand/edit/:id",
            templateUrl: "wwwroot/components/brand/brand-editor.html",
            selector: "brand-editor",
            providers: ["$location", "brandActionCreator", "invokeAsync"]
        }),
        component_decorators_1.CanActivate(["$route", "invokeAsync", "brandActionCreator", function ($route, invokeAsync, brandActionCreator) {
                var id = $route.current.params.id;
                return invokeAsync({
                    action: brandActionCreator.getById,
                    params: { id: id }
                });
            }]), 
        __metadata('design:paramtypes', [Object, Object, Object])
    ], BrandEditorComponent);
    return BrandEditorComponent;
})();
exports.BrandEditorComponent = BrandEditorComponent;
//# sourceMappingURL=brand-editor.js.map