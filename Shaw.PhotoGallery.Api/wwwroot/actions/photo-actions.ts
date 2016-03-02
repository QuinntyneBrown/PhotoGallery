import { IDispatcher } from "../../libs/store";

export class PhotoActionCreator {
    constructor(private photoService, private dispatcher: IDispatcher, private guid) { }

    getById = options => {
        var newId = this.guid();
        this.photoService.get().then(results => {
            var action = new AddOrUpdatePhotoAction(newId, results);
            this.dispatcher.dispatch(action);
        });
        return newId;
    }

    get = () => {
        var newId = this.guid();
        this.photoService.get().then(results => {
            var action = new AllPhotosAction(newId, results);
            this.dispatcher.dispatch(action);
        });
        return newId;
    }

    add = options => {
        var newId = this.guid();
        this.photoService.add({ data: options.data }).then(results => {
            var action = new AddOrUpdatePhotoAction(newId, results);
            this.dispatcher.dispatch(action);
        });
        return newId;
    }
}

export class AddOrUpdatePhotoAction { constructor(public id, public entity) { } }

export class AllPhotosAction { constructor(public id, public entities) { } }

export class RemovePhotoAction { constructor(public id, public entityId) { } }

export class PhotosFilterAction { constructor(public id, public term) { } }

export class SetCurrentPhotoAction { constructor(public id, public entityId) { } }