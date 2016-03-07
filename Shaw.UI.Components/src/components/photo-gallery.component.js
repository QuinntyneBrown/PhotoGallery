var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var component_decorators_1 = require("../utilities/component-decorators");
var PhotoGalleryComponent = (function () {
    function PhotoGalleryComponent($element) {
        this.$element = $element;
    }
    PhotoGalleryComponent = __decorate([
        component_decorators_1.Component({
            selector: "photo-gallery",
            tempalteUrl: "src/components/photo-gallery.component.html",
            providers: ["$element"]
        }), 
        __metadata('design:paramtypes', [Object])
    ], PhotoGalleryComponent);
    return PhotoGalleryComponent;
})();
exports.PhotoGalleryComponent = PhotoGalleryComponent;
//# sourceMappingURL=photo-gallery.component.js.map