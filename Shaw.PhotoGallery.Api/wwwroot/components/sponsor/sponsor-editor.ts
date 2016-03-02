import { CanActivate, Component } from "../../../libs/component-decorators";
import { SponsorActionCreator } from "../../actions";

@Component({
    route: "/sponsor/edit/:id",
    templateUrl: "wwwroot/components/sponsor/sponsor-editor.html",
    selector: "sponsor-editor",
    providers: ["$location", "sponsorActionCreator", "invokeAsync"]
})
@CanActivate(["$route", "invokeAsync", "sponsorActionCreator", ($route, invokeAsync, sponsorActionCreator: SponsorActionCreator) => {
    var id = $route.current.params.id;
    return invokeAsync({
        action: sponsorActionCreator.getById,
        params: { id: id }
    });
}])
export class sponsorEditorComponent {
    constructor(private $location, private sponsorActionCreator, private invokeAsync) { }

    storeOnChange = state => {
        this.id = null;
        this.name = null;
        this.photos = [];
        this.authorName = null;
    }

    addOrUpdate = () => {
        this.invokeAsync({
            action: this.sponsorActionCreator.addOrUpdate,
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

    remove = () => this.sponsorActionCreator.remove({ id: this.id });

    id;
    name;
    photos: Array<any>;
    authorName;
    description;
    entities;
    baseUrl;
}