import { CanActivate, Component } from "../../../libs/component-decorators";

@Component({
    route: "/author/list",
    templateUrl: "wwwroot/components/author/author-list.html",
    selector: "author-list",
    providers: ["$location", "authorActionCreator"]
})
@CanActivate([
    "authorActionCreator", "invokeAsync",
    (authorActionCreator, invokeAsync) => invokeAsync(authorActionCreator.all)
])
export class authorListComponent {
    constructor(private $location: angular.ILocationService, private authorActionCreator) { }
    storeOnChange = state => this.entities = state.authors;
    entities;
    remove = author => this.authorActionCreator.remove({ author: author });
}