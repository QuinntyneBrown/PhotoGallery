var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var actions_1 = require("../../actions");
var component_decorators_1 = require("../../../libs/component-decorators");
var TabsComponent = (function () {
    function TabsComponent($attrs, $element, tabActionCreator) {
        var _this = this;
        this.$attrs = $attrs;
        this.$element = $element;
        this.tabActionCreator = tabActionCreator;
        this.storeOnChange = function (state) {
            _this.currentIndex = state.tabIndex[_this.$attrs["tabsName"]] || 0;
            if (state.lastTriggeredByAction === actions_1.SetCurrentTabAction) {
                _this.updateCurrentTab();
            }
            if (state.lastTriggeredByAction === actions_1.TabChildLoadedAction) {
                _this._titleElements = angular.element(_this.$element[0].querySelectorAll('.tab-title'));
                _this._contentElements = angular.element(_this.$element[0].querySelectorAll('.tab-content'));
                for (var i = 0; i < _this.titleElements.length; i++) {
                    _this.titleElements[i].setAttribute("index", i.toString());
                    _this.titleElements[i].setAttribute("tabs-name", _this.$attrs["tabsName"]);
                }
                _this.updateCurrentTab();
            }
        };
        this.updateCurrentTab = function () {
            for (var i = 0; i < _this.titleElements.length; i++) {
                if (i != _this.currentIndex) {
                    _this.titleElements[i].classList.remove("tabs-titleselected");
                }
                else {
                    _this.titleElements[i].classList.add("tabs-titleselected");
                }
            }
            for (var i = 0; i < _this.contentElements.length; i++) {
                if (i != _this.currentIndex) {
                    _this.contentElements[i].classList.add("tabs-contentInActive");
                }
                else {
                    _this.contentElements[i].classList.remove("tabs-contentInActive");
                }
            }
        };
        this.currentIndex = 0;
    }
    Object.defineProperty(TabsComponent.prototype, "titleElements", {
        get: function () { return this._titleElements; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsComponent.prototype, "contentElements", {
        get: function () { return this._contentElements; },
        enumerable: true,
        configurable: true
    });
    TabsComponent = __decorate([
        component_decorators_1.Component({
            templateUrl: "wwwroot/components/shared/tabs.html",
            selector: "tabs",
            providers: ["$attrs", "$element", "tabActionCreator"],
            transclude: {
                'title': '?tabTitle',
                'content': '?tabContent'
            }
        }), 
        __metadata('design:paramtypes', [Object, Object, Object])
    ], TabsComponent);
    return TabsComponent;
})();
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=tabs.js.map