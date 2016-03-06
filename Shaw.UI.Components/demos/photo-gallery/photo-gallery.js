var app = angular.module("photoGalleryApp", [
    "shaw.components.library"
]);
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
})();
AppComponent.config = {
    selector: "app",
    template: "<image src='images/1-tree-stump-coffee-table1_940x640.jpg'/>",
    component: AppComponent
};
app.component(AppComponent);
//# sourceMappingURL=photo-gallery.js.map