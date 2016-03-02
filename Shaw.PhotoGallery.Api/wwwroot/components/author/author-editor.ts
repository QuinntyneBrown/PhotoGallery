import { CanActivate, Component } from "../../../libs/component-decorators";
import { AuthorActionCreator } from "../../actions";

@Component({
    route: "/author/edit/:id",
    templateUrl: "wwwroot/components/author/author-editor.html",
    selector: "author-editor",
    providers: ["$location", "authorActionCreator", "invokeAsync"]
})
@CanActivate(["$route", "invokeAsync", "authorActionCreator", ($route, invokeAsync, authorActionCreator: AuthorActionCreator) => {
    var id = $route.current.params.id;
    return invokeAsync({
        action: authorActionCreator.getById,
        params: { id: id }
    });
}])
export class authorEditorComponent {
    constructor(private $location, private authorActionCreator, private invokeAsync) { }

    storeOnChange = state => {
        this.id = null;
        this.name = null;
        this.photos = [];
        this.authorName = null;
    }

    addOrUpdate = () => {
        this.invokeAsync({
            action: this.authorActionCreator.addOrUpdate,
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

    remove = () => this.authorActionCreator.remove({ id: this.id });

    id;
    name;
    photos: Array<any>;
    authorName;
    description;
    entities;
    baseUrl;
}