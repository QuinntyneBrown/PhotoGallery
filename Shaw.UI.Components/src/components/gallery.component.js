var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var component_decorators_1 = require("../utilities/component-decorators");
var GalleryComponent = (function () {
    function GalleryComponent($element) {
        this.$element = $element;
        this.storeOnStateChange = function (state) {
        };
        this.next = function () {
        };
        this.previous = function () {
        };
    }
    GalleryComponent = __decorate([
        component_decorators_1.Component({
            selector: "gallery",
            templateUrl: "src/components/gallery.component.html",
            providers: ["$element"]
        }), 
        __metadata('design:paramtypes', [Object])
    ], GalleryComponent);
    return GalleryComponent;
})();
exports.GalleryComponent = GalleryComponent;
//# sourceMappingURL=gallery.component.js.map