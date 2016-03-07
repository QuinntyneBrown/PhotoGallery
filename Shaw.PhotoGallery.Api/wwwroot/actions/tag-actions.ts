import { IDispatcher } from "../../libs/store";
import { BaseActionCreator } from "./base-actions";

export class TagActionCreator extends BaseActionCreator  {
    constructor(dispatcher: IDispatcher, guid, tagService) {
        super(tagService,dispatcher,guid,AddOrUpdateTagAction,AllTagsAction,RemoveTagAction)
    }
    

}

export class SetCurrentTagAction { constructor(public entity) { } }

export class AddOrUpdateTagAction { constructor(public id, public entity) { } }

export class AllTagsAction { constructor(public id, public entities) { } }

export class RemoveTagAction { constructor(public id, public entityId) { } }

export class TagsFilterAction { constructor(public id, public term) { } }
