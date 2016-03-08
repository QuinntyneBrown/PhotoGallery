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
var SearchComponent = (function () {
    function SearchComponent($element, searchActionCreator) {
        var _this = this;
        this.$element = $element;
        this.searchActionCreator = searchActionCreator;
        this.storeOnChange = function (state) { return (_a = [_this.searchInputElement.value ? _this.searchInputElement.value : state.searchTerm, state.searchResults], _this.searchInputElement.value = _a[0], _this.searchResults = _a[1], _a); var _a; };
        this.ngOnInit = function () { _this.inputChanged$.subscribe(function (term) { return _this.searchActionCreator.query({ term: term }); }); };
        this.inputChanged$ = Rx.Observable.fromEvent(this.searchInputElement, "keyup")
            .map(function (e) { return e.target.value; })
            .filter(function (text) { return text.length > 1; })
            .debounce(100)
            .distinctUntilChanged();
    }
    Object.defineProperty(SearchComponent.prototype, "searchInputElement", {
        get: function () { return this.$element[0].querySelector("#search-input-field"); },
        enumerable: true,
        configurable: true
    });
    SearchComponent = __decorate([
        component_decorators_1.Component({
            templateUrl: "wwwroot/components/search/search.html",
            selector: "search",
            providers: ["$element", "searchActionCreator"]
        }), 
        __metadata('design:paramtypes', [Object, actions_1.SearchActionCreator])
    ], SearchComponent);
    return SearchComponent;
})();
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.js.map