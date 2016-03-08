import { CanActivate, Component } from "../../../libs/component-decorators";

@Component({
    route: "/description/list",
    templateUrl: "wwwroot/components/description/description-list.html",
    selector: "description-list",
    providers: ["$location", "descriptionActionCreator"]
})
@CanActivate([
    "descriptionActionCreator", "invokeAsync",
    (descriptionActionCreator, invokeAsync) => invokeAsync(descriptionActionCreator.all)
])
export class descriptionListComponent {
    constructor(private $location: angular.ILocationService, private descriptionActionCreator) { }
    storeOnChange = state => this.entities = state.descriptions;
    entities;
    remove = description => this.descriptionActionCreator.remove({ description: description });
}