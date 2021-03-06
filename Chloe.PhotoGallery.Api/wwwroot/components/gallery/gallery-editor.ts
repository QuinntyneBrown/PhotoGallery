﻿import { CanActivate, Component } from "../../../libs/component-decorators";
import { GalleryActionCreator } from "../../actions";

@Component({
    route: "/gallery/edit/:id",
    templateUrl: "wwwroot/components/gallery/gallery-editor.html",
    selector: "gallery-editor",
    providers: ["$location","galleryActionCreator","invokeAsync"]
})
@CanActivate(["$route", "invokeAsync", "galleryActionCreator", ($route, invokeAsync, galleryActionCreator: GalleryActionCreator) => {
    var id = $route.current.params.id;
    return invokeAsync({
        action: galleryActionCreator.getById,
        params: { id: id }
    });
}])
export class GalleryEditorComponent {
    constructor(private $location, private galleryActionCreator, private invokeAsync) { }

    storeOnChange = state => { }

    addOrUpdate = () => {
        this.invokeAsync({
            action: this.galleryActionCreator.addOrUpdate,
            params: {
                data: {
                    id: this.id,
                    title: this.title,
                    name: this.name,
                    description: this.description,
                    sponsorId: this.sponsorId,
                    photos: this.photos,
                    metaDate: this.metaData,
                    openGraphData: this.openGraphData
                }
            }
        }).then(() => {
            if (!this.id && this.entities.filter(entity => entity.name === this.name).length > 0) {

            }
            else {

            }
        });
    } 
    
    create = () => {
        this.galleryActionCreator.create();
    }

    remove = () => this.galleryActionCreator.remove({ id: this.id });
         
    id;
    name;
    title;
    sponsor;
    sponsorId;    
    description;
    tags: Array<any>;
    photos: Array<any>;
    metaData: Array<any>;
    openGraphData: Array<any>;
    entities: Array<any> = [];

    authors: Array<any>;
    sponsors: Array<any>;
    baseUrl;
}