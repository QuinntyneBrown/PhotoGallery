var SearchActionCreator = (function () {
    function SearchActionCreator(dispatcher, guid, searchService) {
        var _this = this;
        this.dispatcher = dispatcher;
        this.guid = guid;
        this.searchService = searchService;
        this.query = function (options) {
            var newId = _this.guid();
            _this.searchService.query({ term: options.term })
                .then(function (results) { return _this.dispatcher.dispatch(new SearchQueryAction(newId, options.term, results)); });
            return newId;
        };
    }
    return SearchActionCreator;
})();
exports.SearchActionCreator = SearchActionCreator;
var SearchQueryAction = (function () {
    function SearchQueryAction(id, term, results) {
        this.id = id;
        this.term = term;
        this.results = results;
    }
    return SearchQueryAction;
})();
exports.SearchQueryAction = SearchQueryAction;
//# sourceMappingURL=search-actions.js.map