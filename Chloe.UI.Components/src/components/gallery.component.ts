﻿import { Component } from "../utilities/component-decorators";
import { GalleryActionCreator } from "../actions/gallery-actions";


@Component({
    selector: "gallery",
    templateUrl: "src/components/gallery.component.html",
    providers: ["$element","galleryActionCreator"]
})
export class GalleryComponent {
    constructor(private $element: angular.IAugmentedJQuery, private galleryActionCreator: GalleryActionCreator) {
        
    }

    storeOnStateChange = state => {

    }

    next = () => {

    }
    
    previous = () => {

    } 
    //no previous

    //if you click next you are on the last slide, display the invite to go to
    // the next gallery

    // if you are on the invite to the next gallery and you click next, go to the next gallery


    
} 