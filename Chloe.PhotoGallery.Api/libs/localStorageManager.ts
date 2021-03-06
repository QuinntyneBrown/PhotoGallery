﻿class LocalStorageManagerProvider implements angular.IServiceProvider {
    constructor() {
        window.onbeforeunload = () => localStorage.setItem(this.id, JSON.stringify(this.items))
    }

    private id = "f30e5bdd-efd2-4481-acbe-f628f494eb99";

    private _items = null;

    private get items() {
        if (this._items === null) {
            var storageItems = localStorage.getItem(this.id);
            if (storageItems === "null") {
                storageItems = null;
            }
            this._items = JSON.parse(storageItems || "[]");
        }

        return this._items;
    }

    private set items(value: Array<any>) {
        this._items = value;
    }

    public get = (options: any) => {
        var storageItem = null;
        for (var i = 0; i < this.items.length; i++) {
            if (options.name === this.items[i].name)
                storageItem = this.items[i].value;
        }
        return storageItem;
    }

    public put = (options: any) => {
        var itemExists = false;

        this.items.forEach((item: any) => {
            if (options.name === item.name) {
                itemExists = true;
                item.value = options.value
            }
        });

        if (!itemExists) {
            var items = this.items;
            items.push({ name: options.name, value: options.value });
            this.items = items;
            items = null;
        }
    }

    public clear = () => {
        this._items = [];
    }

    $get = () => this;

}


angular.module("localStorageManager", []).provider("localStorageManager", LocalStorageManagerProvider);
