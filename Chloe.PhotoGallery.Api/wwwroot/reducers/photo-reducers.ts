﻿import { addOrUpdate, pluckOut } from "../../libs";
import { AddOrUpdatePhotoAction, AllPhotosAction, RemovePhotoAction } from "../actions";

export const addPhotoReducer = (state, action) => {
    if (action instanceof AddOrUpdatePhotoAction) {
        addOrUpdate({ items: state.photos, item: action.entity });
    }
    return state;
}

export const allPhotosReducer = (state, action) => {
    if (action instanceof AllPhotosAction) {
        state.photos = action.entities;
    }
    return state;
}

export const removePhotoReducer = (state, action) => {
    if (action instanceof RemovePhotoAction)
        pluckOut({ items: state.galleries, value: action.entity });
    return state;
}
