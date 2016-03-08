var app: any = angular.module("photoGalleryApp", [
    "chloe.components.library"
]);

class AppComponent { }

(<any>AppComponent).config = {
    selector: "app",
    template: "<div><a href='#/timber-kings'><image src='images/tree-stump-coffee-table.jpg'/></a><a href='#/loveland'><image src='images/loveland-one.jpg'/></a></div>",
    component: AppComponent
};

app.component(AppComponent);

