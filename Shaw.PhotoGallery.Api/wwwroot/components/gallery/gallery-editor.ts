import { CanActivate, Component } from "../../../libs/component-decorators";
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

    storeOnChange = state => {
        this.id = null;
        this.name = null;
        this.photos = [];
        this.authorName = null;
    }

    addOrUpdate = () => {
        this.invokeAsync({
            action: this.galleryActionCreator.addOrUpdate,
            params: {
                id: this.id,
                name: this.name,
                description: this.description
            }
        }).then(() => {
            if (!this.id && this.entities.filter(entity => entity.name === this.name).length > 0) {

            }
            else {

            }
        });
    } 
    
    remove = () => this.galleryActionCreator.remove({ id: this.id });
         
    id;
    name;
    photos: Array<any>;
    authorName;
    description;
    entities;
    baseUrl;
}