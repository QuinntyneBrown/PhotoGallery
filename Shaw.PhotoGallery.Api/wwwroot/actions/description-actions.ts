import { IDispatcher } from "../../libs/store";

export class DescriptionActionCreator {
    constructor(private descriptionService, private dispatcher: IDispatcher, private guid) { }

    getById = options => {
        var newId = this.guid();
        this.descriptionService.get().then(results => {
            var action = new AddOrUpdateDescriptionAction(newId, results);
            this.dispatcher.dispatch(action);
        });
        return newId;
    }

    get = () => {
        var newId = this.guid();
        this.descriptionService.get().then(results => {
            var action = new AllDescriptionsAction(newId, results);
            this.dispatcher.dispatch(action);
        });
        return newId;
    }

    addDescription = options => {
        var newId = this.guid();
        this.descriptionService.add({ data: options.data }).then(results => {
            var action = new AddOrUpdateDescriptionAction(newId, results);
            this.dispatcher.dispatch(action);
        });
        return newId;
    }

}

export class AddOrUpdateDescriptionAction { constructor(public id, public entity) { } }

export class AllDescriptionsAction { constructor(public id, public entities) { } }

export class RemoveDescriptionAction { constructor(public id, public entityId) { } }

export class DescriptionsFilterAction { constructor(public id, public term) { } }

export class SetCurrentDescriptionAction { constructor(public id, public entityId) { } }