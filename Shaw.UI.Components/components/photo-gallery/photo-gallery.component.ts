import { Component } from "../../libs/component-decorators";

@Component({
    selector: "photo-gallery",
    tempalteUrl: "./photo-gallery.component.html",
    inputs: ["$element"]
})
export class PhotoGalleryComponent {
    constructor(private $element: angular.IAugmentedJQuery) { }


} 