var LocalStorageManagerProvider = (function () {
    function LocalStorageManagerProvider() {
        var _this = this;
        this.id = "79b6254f-a0e9-44d9-b910-ca5ff12e5251";
        this._items = null;
        this.get = function (options) {
            var storageItem = null;
            for (var i = 0; i < _this.items.length; i++) {
                if (options.name === _this.items[i].name)
                    storageItem = _this.items[i].value;
            }
            return storageItem;
        };
        this.put = function (options) {
            var itemExists = false;
            _this.items.forEach(function (item) {
                if (options.name === item.name) {
                    itemExists = true;
                    item.value = options.value;
                }
            });
            if (!itemExists) {
                var items = _this.items;
                items.push({ name: options.name, value: options.value });
                _this.items = items;
                items = null;
            }
        };
        this.clear = function () {
            _this._items = [];
        };
        this.$get = function () { return _this; };
        window.onbeforeunload = function () { return localStorage.setItem(_this.id, JSON.stringify(_this.items)); };
    }
    Object.defineProperty(LocalStorageManagerProvider.prototype, "items", {
        get: function () {
            if (this._items === null) {
                var storageItems = localStorage.getItem(this.id);
                if (storageItems === "null") {
                    storageItems = null;
                }
                this._items = JSON.parse(storageItems || "[]");
            }
            return this._items;
        },
        set: function (value) {
            this._items = value;
        },
        enumerable: true,
        configurable: true
    });
    return LocalStorageManagerProvider;
})();
angular.module("localStorageManager", []).provider("localStorageManager", LocalStorageManagerProvider);
//# sourceMappingURL=localStorageManager.js.map