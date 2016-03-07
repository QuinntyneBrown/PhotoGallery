var app: any = angular.module("photoGalleryApp", [
    "shaw.components.library"
]);

class AppComponent { }

(<any>AppComponent).config = {
    selector: "app",
    template: "<div><a href='#/timber-kings'><image src='images/1-tree-stump-coffee-table1.jpg'/></a><a href='#/loveland'><image src='images/Loveland-4.jpg'/></a></div>",
    component: AppComponent
};

app.component(AppComponent);

