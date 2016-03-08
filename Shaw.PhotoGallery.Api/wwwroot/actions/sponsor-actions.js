var SponsorActionCreator = (function () {
    function SponsorActionCreator(sponsorService, dispatcher, guid) {
        var _this = this;
        this.sponsorService = sponsorService;
        this.dispatcher = dispatcher;
        this.guid = guid;
        this.get = function () {
            var newId = _this.guid();
            _this.sponsorService.get().then(function (results) {
                var action = new AllSponsorsAction(newId, results);
                _this.dispatcher.dispatch(action);
            });
            return newId;
        };
        this.addSponsor = function (options) {
            var newId = _this.guid();
            _this.sponsorService.add({ data: options.data }).then(function (results) {
                var action = new AddOrUpdateSponsorAction(newId, results);
                _this.dispatcher.dispatch(action);
            });
            return newId;
        };
        this.getById = function (options) {
            var newId = _this.guid();
            _this.sponsorService.getById({ id: options.id }).then(function (results) {
                var action = new AddOrUpdateSponsorAction(newId, results);
                _this.dispatcher.dispatch(action);
            });
            return newId;
        };
    }
    return SponsorActionCreator;
})();
exports.SponsorActionCreator = SponsorActionCreator;
var AddOrUpdateSponsorAction = (function () {
    function AddOrUpdateSponsorAction(id, entity) {
        this.id = id;
        this.entity = entity;
    }
    return AddOrUpdateSponsorAction;
})();
exports.AddOrUpdateSponsorAction = AddOrUpdateSponsorAction;
var AllSponsorsAction = (function () {
    function AllSponsorsAction(id, entities) {
        this.id = id;
        this.entities = entities;
    }
    return AllSponsorsAction;
})();
exports.AllSponsorsAction = AllSponsorsAction;
var RemoveSponsorAction = (function () {
    function RemoveSponsorAction(id, entityId) {
        this.id = id;
        this.entityId = entityId;
    }
    return RemoveSponsorAction;
})();
exports.RemoveSponsorAction = RemoveSponsorAction;
var SponsorsFilterAction = (function () {
    function SponsorsFilterAction(id, term) {
        this.id = id;
        this.term = term;
    }
    return SponsorsFilterAction;
})();
exports.SponsorsFilterAction = SponsorsFilterAction;
var SetCurrentSponsorAction = (function () {
    function SetCurrentSponsorAction(id, entityId) {
        this.id = id;
        this.entityId = entityId;
    }
    return SetCurrentSponsorAction;
})();
exports.SetCurrentSponsorAction = SetCurrentSponsorAction;
//# sourceMappingURL=sponsor-actions.js.map