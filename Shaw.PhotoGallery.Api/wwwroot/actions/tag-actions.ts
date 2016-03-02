import { IDispatcher } from "../../libs/store";

export class TagActionCreator {
    constructor(private $location,private tagService, private dispatcher: IDispatcher, private guid) { }

    create = () => {
        this.dispatcher.dispatch(new SetCurrentTagAction(null));
        this.$location.path("/tag/list");
    }

    edit = (options) => {
        this.dispatcher.dispatch(new SetCurrentTagAction(options.entity));
        this.$location.path("/tag/edit/" + options.entity.id);
    }

    getById = options => {
        var newId = this.guid();
        this.tagService.get().then(results => {
            var action = new AddOrUpdateTagAction(newId, results);
            this.dispatcher.dispatch(action);
        });
        return newId;
    }

    all = () => {
        var newId = this.guid();
        this.tagService.get().then(results => {
            var action = new AllTagsAction(newId, results);
            this.dispatcher.dispatch(action);
        });
        return newId;
    }

    addOrUpdate = options => {
        var newId = this.guid();
        this.tagService.add({ data: options.data }).then(results => {
            var action = new AddOrUpdateTagAction(newId, results);
            this.dispatcher.dispatch(action);
        });
        return newId;
    }

    remove = options => {
        var newId = this.guid();
        this.tagService.remove({ id: options.entity.id })
            .then(results => this.dispatcher.dispatch(new RemoveTagAction(newId, options.entity)));
        return newId;
    }

}

export class SetCurrentTagAction { constructor(public entity) { } }

export class AddOrUpdateTagAction { constructor(public id, public entity) { } }

export class AllTagsAction { constructor(public id, public entities) { } }

export class RemoveTagAction { constructor(public id, public entityId) { } }

export class TagsFilterAction { constructor(public id, public term) { } }
