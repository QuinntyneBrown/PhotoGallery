var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var component_decorators_1 = require("../../../libs/component-decorators");
var actions_1 = require("../../actions");
var TabContentComponent = (function () {
    function TabContentComponent(tabActionCreator) {
        var _this = this;
        this.tabActionCreator = tabActionCreator;
        this.storeOnChange = function (state) { };
        this.ngOnInit = function () { return _this.tabActionCreator.tabChildLoaded(); };
    }
    TabContentComponent = __decorate([
        component_decorators_1.Component({
            templateUrl: "wwwroot/components/shared/tab-content.html",
            selector: "tab-content",
            providers: ["tabActionCreator"],
            transclude: true
        }), 
        __metadata('design:paramtypes', [actions_1.TabActionCreator])
    ], TabContentComponent);
    return TabContentComponent;
})();
exports.TabContentComponent = TabContentComponent;
//# sourceMappingURL=tab-content.js.map