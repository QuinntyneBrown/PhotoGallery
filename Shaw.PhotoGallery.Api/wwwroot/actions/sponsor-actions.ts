import { IDispatcher } from "../../libs/store";

export interface ISponsorActionCreator {
    get(): string;
    addSponsor(options: any): string;
}

export class SponsorActionCreator implements ISponsorActionCreator {
    constructor(private sponsorService, private dispatcher: IDispatcher, private guid) { }

    get = () => {
        var newId = this.guid();
        this.sponsorService.get().then(results => {
            var action = new AllSponsorsAction(newId, results);
            this.dispatcher.dispatch(action);
        });
        return newId;
    }

    addSponsor = options => {
        var newId = this.guid();
        this.sponsorService.add({ data: options.data }).then(results => {
            var action = new AddOrUpdateSponsorAction(newId, results);
            this.dispatcher.dispatch(action);
        });
        return newId;
    }

}

export class AddOrUpdateSponsorAction { constructor(public id, public entity) { } }

export class AllSponsorsAction { constructor(public id, public entities) { } }

export class RemoveSponsorAction { constructor(public id, public entityId) { } }

export class SponsorsFilterAction { constructor(public id, public term) { } }

export class SetCurrentSponsorAction { constructor(public id, public entityId) { } }