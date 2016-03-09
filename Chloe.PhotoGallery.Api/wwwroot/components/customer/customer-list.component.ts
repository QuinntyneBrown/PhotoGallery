import { CanActivate, Component } from "../../../libs/component-decorators";

@Component({
    route: "/customer/list",
    templateUrl: "wwwroot/components/customer/customer-list.html",
    selector: "customer-list",
    providers: ["customerActionCreator"]
})
export class CustomerListComponent {
    

}