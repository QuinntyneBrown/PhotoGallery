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
    template: "<div><a href='#/timber-kings'><image src='images/1-tree-stump-coffee-table1.jpg'/></a><a href='#/loveland'><image src='images/Loveland-4.jpg'/></a></div>",
    component: AppComponent
};
app.component(AppComponent);
//# sourceMappingURL=photo-gallery.js.map