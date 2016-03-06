import { CanActivate, Component } from "../../../libs/component-decorators";

@Component({
    templateUrl: "wwwroot/components/shared/button.html",
    selector: "pg-button",
    componentName: "pgButtonComponent",
    inputs: ['caption', 'onClick']
})
export class ButtonComponent { }