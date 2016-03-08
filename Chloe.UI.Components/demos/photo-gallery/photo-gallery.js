var app = angular.module("photoGalleryApp", [
    "chloe.components.library"
]);
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
})();
AppComponent.config = {
    selector: "app",
    template: "<div><a href='#/timber-kings'><image src='images/tree-stump-coffee-table.jpg'/></a><a href='#/loveland'><image src='images/loveland-one.jpg'/></a></div>",
    component: AppComponent
};
app.component(AppComponent);
//# sourceMappingURL=photo-gallery.js.map