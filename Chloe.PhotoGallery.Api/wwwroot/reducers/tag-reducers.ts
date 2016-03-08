import { AddOrUpdateTagAction, AllTagsAction, RemoveTagAction } from "../actions";
import { addOrUpdate, pluckOut } from "../../libs";

export const addTagReducer = (state, action) => {
    if (action instanceof AddOrUpdateTagAction) {
        addOrUpdate({ items: state.photos, item: action.entity });
    }
    return state;
}

export const allTagsReducer = (state, action) => {
    if (action instanceof AllTagsAction) {
        state.tags = action.entities;
    }
    return state;
}

export const removeTagReducer = (state, action) => {
    if (action instanceof RemoveTagAction)
        pluckOut({ items: state.galleries, value: action.entity });
    return state;
}