import { IDispatcher } from "../../libs/store";
import { BaseActionCreator } from "./base-actions";

export class GalleryActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, galleryService, guid) {
        super($location,galleryService,dispatcher,guid,AddOrUpdateGalleryAction,AllGalleriesAction,RemoveGalleryAction)
    }    

    edit = options => {
        this.dispatcher.dispatch(new SetCurrentGalleryAction(options.entity));
        this.$location.path("/gallery/edit/" + options.entity.id);
    }

    create = () => {
        this.dispatcher.dispatch(new SetCurrentGalleryAction(null));
        this.$location.path("/gallery/list");
    }
}


export class AddOrUpdateGalleryAction { constructor(public id, public entity) { } }

export class AllGalleriesAction { constructor(public id, public entities) { } }

export class RemoveGalleryAction { constructor(public id, public entity) { } }

export class GallerysFilterAction { constructor(public id, public term) { } }

export class SetCurrentGalleryAction { constructor(public entity) { } }