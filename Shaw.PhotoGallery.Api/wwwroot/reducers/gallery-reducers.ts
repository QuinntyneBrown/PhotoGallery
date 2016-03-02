import { AddOrUpdateGalleryAction, AllGalleriesAction, RemoveGalleryAction } from "../actions";
import { addOrUpdate, pluckOut } from "../../libs";

export const removeGalleryReducer = (state, action) => {
    if (action instanceof RemoveGalleryAction)
        pluckOut({ items: state.galleries, value: action.entity.id });
    return state;
}

export const addGalleryReducer = (state, action) => {
    if (action instanceof AddOrUpdateGalleryAction) {
        addOrUpdate({ items: state.galleries, item: action.entity });
    }
    return state;
}

export const allGalleriesReducer = (state, action) => {
    if (action instanceof AllGalleriesAction) {
        state.galleries = action.entities;
    }
    return state;
}