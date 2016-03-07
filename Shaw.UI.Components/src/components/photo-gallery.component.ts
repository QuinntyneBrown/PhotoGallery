import { Component } from "../utilities/component-decorators";

@Component({
    selector: "photo-gallery",
    tempalteUrl: "src/components/photo-gallery.component.html",
    providers: ["$element"]
})
export class PhotoGalleryComponent {
    constructor(private $element: angular.IAugmentedJQuery) { }


} 