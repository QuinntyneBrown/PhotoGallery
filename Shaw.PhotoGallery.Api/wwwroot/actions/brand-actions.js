var BrandActionCreator = (function () {
    function BrandActionCreator(brandService, dispatcher, guid) {
        var _this = this;
        this.brandService = brandService;
        this.dispatcher = dispatcher;
        this.guid = guid;
        this.get = function () {
            var newId = _this.guid();
            _this.brandService.get().then(function (results) {
                var action = new AllBrandsAction(newId, results);
                _this.dispatcher.dispatch(action);
            });
            return newId;
        };
        this.addBrand = function (options) {
            var newId = _this.guid();
            _this.brandService.add({ data: options.data }).then(function (results) {
                var action = new AddOrUpdateBrandAction(newId, results);
                _this.dispatcher.dispatch(action);
            });
            return newId;
        };
        this.getById = function (options) {
            var newId = _this.guid();
            _this.brandService.get().then(function (results) {
                var action = new AddOrUpdateBrandAction(newId, results);
                _this.dispatcher.dispatch(action);
            });
            return newId;
        };
    }
    return BrandActionCreator;
})();
exports.BrandActionCreator = BrandActionCreator;
var AddOrUpdateBrandAction = (function () {
    function AddOrUpdateBrandAction(id, entity) {
        this.id = id;
        this.entity = entity;
    }
    return AddOrUpdateBrandAction;
})();
exports.AddOrUpdateBrandAction = AddOrUpdateBrandAction;
var AllBrandsAction = (function () {
    function AllBrandsAction(id, entities) {
        this.id = id;
        this.entities = entities;
    }
    return AllBrandsAction;
})();
exports.AllBrandsAction = AllBrandsAction;
var RemoveBrandAction = (function () {
    function RemoveBrandAction(id, entityId) {
        this.id = id;
        this.entityId = entityId;
    }
    return RemoveBrandAction;
})();
exports.RemoveBrandAction = RemoveBrandAction;
var BrandsFilterAction = (function () {
    function BrandsFilterAction(id, term) {
        this.id = id;
        this.term = term;
    }
    return BrandsFilterAction;
})();
exports.BrandsFilterAction = BrandsFilterAction;
var SetCurrentBrandAction = (function () {
    function SetCurrentBrandAction(id, entityId) {
        this.id = id;
        this.entityId = entityId;
    }
    return SetCurrentBrandAction;
})();
exports.SetCurrentBrandAction = SetCurrentBrandAction;
//# sourceMappingURL=brand-actions.js.map