var app: any = angular.module("photoGalleryApp", []);

class AppComponent { }

(<any>AppComponent).config = {
    selector: "app",
    template: "<image src='images/1-tree-stump-coffee-table1_940x640.jpg'/>",
    component: AppComponent
};

app.component(AppComponent);

