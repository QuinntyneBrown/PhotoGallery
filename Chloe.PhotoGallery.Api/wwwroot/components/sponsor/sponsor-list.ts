import { CanActivate, Component } from "../../../libs/component-decorators";

@Component({
    route: "/sponsor/list",
    templateUrl: "wwwroot/components/sponsor/sponsor-list.html",
    selector: "sponsor-list",
    providers: ["$location", "sponsorActionCreator"]
})
@CanActivate([
    "sponsorActionCreator", "invokeAsync",
    (sponsorActionCreator, invokeAsync) => invokeAsync(sponsorActionCreator.all)
])
export class sponsorListComponent {
    constructor(private $location: angular.ILocationService, private sponsorActionCreator) { }
    storeOnChange = state => this.entities = state.sponsors;
    entities;
    remove = sponsor => this.sponsorActionCreator.remove({ sponsor: sponsor });
}