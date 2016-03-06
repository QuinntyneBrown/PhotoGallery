import { IDispatcher } from "../../libs/store";
import { BaseActionCreator } from "./base-actions";

export class GalleryActionCreator extends BaseActionCreator {
    constructor(dispatcher: IDispatcher, galleryService, guid) {
        super(galleryService,dispatcher,guid,AddOrUpdateGalleryAction,AllGalleriesAction,RemoveGalleryAction)
    }    
}


export class AddOrUpdateGalleryAction { constructor(public id, public entity) { } }

export class AllGalleriesAction { constructor(public id, public entities) { } }

export class RemoveGalleryAction { constructor(public id, public entity) { } }

export class GallerysFilterAction { constructor(public id, public term) { } }

export class SetCurrentGalleryAction { constructor(public id, public entityId) { } }