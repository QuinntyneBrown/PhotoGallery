import { CanActivate, Component } from "../../../libs/component-decorators";
import { DescriptionActionCreator } from "../../actions";

@Component({
    route: "/description/edit/:id",
    templateUrl: "wwwroot/components/description/description-editor.html",
    selector: "description-editor",
    providers: ["$location", "descriptionActionCreator", "invokeAsync"]
})
@CanActivate(["$route", "invokeAsync", "descriptionActionCreator", ($route, invokeAsync, descriptionActionCreator: DescriptionActionCreator) => {
    var id = $route.current.params.id;
    return invokeAsync({
        action: descriptionActionCreator.getById,
        params: { id: id }
    });
}])
export class DescriptionEditorComponent {
    constructor(private $location, private descriptionActionCreator, private invokeAsync) { }

    storeOnChange = state => {
        this.id = null;
        this.name = null;
        this.photos = [];
        this.DescriptionName = null;
    }

    addOrUpdate = () => {
        this.invokeAsync({
            action: this.descriptionActionCreator.addOrUpdate,
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

    remove = () => this.descriptionActionCreator.remove({ id: this.id });

    id;
    name;
    photos: Array<any>;
    DescriptionName;
    description;
    entities;
    baseUrl;
}