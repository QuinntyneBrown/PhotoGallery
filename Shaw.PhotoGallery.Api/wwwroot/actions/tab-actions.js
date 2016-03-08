var TabActionCreator = (function () {
    function TabActionCreator(dispatcher) {
        var _this = this;
        this.dispatcher = dispatcher;
        this.setCurrentTab = function (options) { return _this.dispatcher.dispatch(new SetCurrentTabAction(options.tabName, options.index)); };
        this.tabChildLoaded = function () { return _this.dispatcher.dispatch(new TabChildLoadedAction()); };
    }
    return TabActionCreator;
})();
exports.TabActionCreator = TabActionCreator;
var SetCurrentTabAction = (function () {
    function SetCurrentTabAction(tabName, index) {
        this.tabName = tabName;
        this.index = index;
    }
    return SetCurrentTabAction;
})();
exports.SetCurrentTabAction = SetCurrentTabAction;
var TabChildLoadedAction = (function () {
    function TabChildLoadedAction() {
    }
    return TabChildLoadedAction;
})();
exports.TabChildLoadedAction = TabChildLoadedAction;
//# sourceMappingURL=tab-actions.js.map