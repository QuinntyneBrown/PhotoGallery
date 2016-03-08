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
var GalleryEditorComponent = (function () {
    function GalleryEditorComponent($location, galleryActionCreator, invokeAsync) {
        var _this = this;
        this.$location = $location;
        this.galleryActionCreator = galleryActionCreator;
        this.invokeAsync = invokeAsync;
        this.storeOnChange = function (state) {
            //this.id = null;
            //this.title = null;
            //this.name = null;
            //this.sponsor = null;
            //this.sponsorId = null;
            //this.photos = [];
            //this.metaData = [];
            //this.tags = [];
            //this.openGraphData = [];
        };
        this.addOrUpdate = function () {
            _this.invokeAsync({
                action: _this.galleryActionCreator.addOrUpdate,
                params: {
                    data: {
                        id: _this.id,
                        title: _this.title,
                        name: _this.name,
                        description: _this.description,
                        sponsorId: _this.sponsorId,
                        photos: _this.photos,
                        metaDate: _this.metaData,
                        openGraphData: _this.openGraphData
                    }
                }
            }).then(function () {
                if (!_this.id && _this.entities.filter(function (entity) { return entity.name === _this.name; }).length > 0) {
                }
                else {
                }
            });
        };
        this.remove = function () { return _this.galleryActionCreator.remove({ id: _this.id }); };
        this.entities = [];
    }
    GalleryEditorComponent = __decorate([
        component_decorators_1.Component({
            route: "/gallery/edit/:id",
            templateUrl: "wwwroot/components/gallery/gallery-editor.html",
            selector: "gallery-editor",
            providers: ["$location", "galleryActionCreator", "invokeAsync"]
        }),
        component_decorators_1.CanActivate(["$route", "invokeAsync", "galleryActionCreator", function ($route, invokeAsync, galleryActionCreator) {
                var id = $route.current.params.id;
                return invokeAsync({
                    action: galleryActionCreator.getById,
                    params: { id: id }
                });
            }]), 
        __metadata('design:paramtypes', [Object, Object, Object])
    ], GalleryEditorComponent);
    return GalleryEditorComponent;
})();
exports.GalleryEditorComponent = GalleryEditorComponent;
//# sourceMappingURL=gallery-editor.js.map