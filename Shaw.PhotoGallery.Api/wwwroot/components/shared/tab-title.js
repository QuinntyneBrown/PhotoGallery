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
var TabTitleComponent = (function () {
    function TabTitleComponent($attrs, tabActionCreator) {
        var _this = this;
        this.$attrs = $attrs;
        this.tabActionCreator = tabActionCreator;
        this.storeOnChange = function (state) { };
        this.ngOnInit = function () { return _this.tabActionCreator.tabChildLoaded(); };
        this.onTabTitleClick = function () { return _this.tabActionCreator.setCurrentTab({
            tabName: _this.$attrs.$$element[0].getAttribute("tabs-name"),
            index: _this.$attrs.$$element[0].getAttribute("index")
        }); };
    }
    TabTitleComponent = __decorate([
        component_decorators_1.Component({
            templateUrl: "wwwroot/components/shared/tab-title.html",
            selector: "tab-title",
            providers: ["$attrs", "tabActionCreator"],
            transclude: true
        }), 
        __metadata('design:paramtypes', [Object, actions_1.TabActionCreator])
    ], TabTitleComponent);
    return TabTitleComponent;
})();
exports.TabTitleComponent = TabTitleComponent;
//# sourceMappingURL=tab-title.js.map