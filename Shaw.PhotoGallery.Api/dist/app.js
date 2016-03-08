/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../typings/tsd.d.ts" />
	__webpack_require__(1);
	__webpack_require__(11);
	__webpack_require__(24);
	__webpack_require__(40);
	var app = angular.module("galleryManagerApp", [
	    "addOrUpdate",
	    "apiEndpoint",
	    "authInterceptor",
	    "fetch",
	    "formEncode",
	    "invokeAsync",
	    "localStorageManager",
	    "loginRedirect",
	    "routeResolver",
	    "routeWhenExtension",
	    "safeDigest",
	    "store",
	    "actions",
	    "components",
	    "reducers",
	    "services",
	    "ui.tinymce"
	]);
	app.config(["$routeProvider", "apiEndpointProvider", "initialStateProvider", "localStorageManagerProvider", function ($routeProvider, apiEndpointProvider, initialStateProvider, localStorageManagerProvider) {
	        var localStorageInitialState = localStorageManagerProvider.get({ name: "initialState" });
	        if (!localStorageInitialState)
	            localStorageManagerProvider.put({
	                name: "initialState", value: {
	                    brands: [],
	                    galleries: [],
	                    photos: [],
	                    tags: [],
	                    users: [],
	                    tabIndex: {},
	                    token: null,
	                    currentUser: null
	                }
	            });
	        initialStateProvider.configure(localStorageManagerProvider.get({ name: "initialState" }));
	        apiEndpointProvider.configure("/api");
	        $routeProvider
	            .when("/", { template: "<login></login>" })
	            .when("/author/list", { template: "<author-list></author-list>" })
	            .when("/brand/list", { template: "<brand-list></brand-list>" })
	            .when("/description/list", { template: "<description-list></description-list>" })
	            .when("/gallery/list", { template: "<gallery-list></gallery-list>" })
	            .when("/photo/list", { template: "<photo-list></photo-list>" })
	            .when("/photo/upload/:galleryId", { template: "<photo-upload></photo-upload>" })
	            .when("/sponsor/list", { template: "<sponsor-list></sponsor-list>" })
	            .when("/tag/list", { template: "<tag-list></tag-list>" })
	            .otherwise("/");
	    }]).config(["loginRedirectProvider", function (loginRedirectProvider) { return loginRedirectProvider.setDefaultUrl("/gallery/list"); }]);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var services = __webpack_require__(2);
	var app = angular.module("services", [
	    "addOrUpdate",
	    "apiEndpoint",
	    "authInterceptor",
	    "fetch",
	    "formEncode",
	    "invokeAsync",
	    "localStorageManager",
	    "loginRedirect",
	    "routeResolver",
	    "routeWhenExtension",
	    "safeDigest",
	    "store"
	]);
	app.service("authorService", ["$q", "apiEndpoint", "fetch", services.AuthorService]);
	app.service("brandService", ["$q", "apiEndpoint", "fetch", services.BrandService]);
	app.service("galleryService", ["$q", "apiEndpoint", "fetch", services.GalleryService]);
	app.service("photoService", ["$q", "apiEndpoint", "fetch", services.PhotoService]);
	app.service("searchService", ["$q", "apiEndpoint", "fetch", services.SearchService]);
	app.service("tagService", ["$q", "apiEndpoint", "fetch", services.TagService]);
	app.service("userService", ["$q", "apiEndpoint", "fetch", "formEncode", services.UserService]);


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(3));
	__export(__webpack_require__(5));
	__export(__webpack_require__(6));
	__export(__webpack_require__(7));
	__export(__webpack_require__(8));
	__export(__webpack_require__(9));
	__export(__webpack_require__(10));


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var base_service_1 = __webpack_require__(4);
	var AuthorService = (function (_super) {
	    __extends(AuthorService, _super);
	    function AuthorService($q, apiEndpoint, fetch) {
	        _super.call(this, $q, apiEndpoint, fetch);
	    }
	    Object.defineProperty(AuthorService.prototype, "baseUri", {
	        get: function () { return this.apiEndpoint.getBaseUrl() + "/author"; },
	        enumerable: true,
	        configurable: true
	    });
	    return AuthorService;
	})(base_service_1.BaseService);
	exports.AuthorService = AuthorService;


/***/ },
/* 4 */
/***/ function(module, exports) {

	var BaseService = (function () {
	    function BaseService($q, apiEndpoint, fetch) {
	        this.$q = $q;
	        this.apiEndpoint = apiEndpoint;
	        this.fetch = fetch;
	    }
	    BaseService.prototype.get = function () {
	        var deferred = this.$q.defer();
	        this.fetch.fromCacheOrService({ method: "GET", url: this.baseUri + "/get" })
	            .then(function (results) { return deferred.resolve(results.data); });
	        return deferred.promise;
	    };
	    ;
	    BaseService.prototype.getById = function (options) {
	        var deferred = this.$q.defer();
	        this.fetch.fromService({ method: "GET", url: this.baseUri + "/getById", params: { id: options.id } })
	            .then(function (results) { return deferred.resolve(results.data); });
	        return deferred.promise;
	    };
	    ;
	    BaseService.prototype.add = function (options) {
	        var deferred = this.$q.defer();
	        this.fetch.fromService({ method: "POST", url: this.baseUri + "/add", data: options.data })
	            .then(function (results) { return deferred.resolve(results.data); });
	        return deferred.promise;
	    };
	    ;
	    BaseService.prototype.update = function (options) {
	        var deferred = this.$q.defer();
	        this.fetch.fromService({ method: "PUT", url: this.baseUri + "/update", data: options.data })
	            .then(function (results) { return deferred.resolve(results.data); });
	        return deferred.promise;
	    };
	    ;
	    BaseService.prototype.remove = function (options) {
	        var deferred = this.$q.defer();
	        this.fetch.fromService({ method: "DELETE", url: this.baseUri + "/remove", params: { id: options.id } })
	            .then(function (results) { return deferred.resolve(results.data); });
	        return deferred.promise;
	    };
	    ;
	    Object.defineProperty(BaseService.prototype, "baseUri", {
	        get: function () { throw new Error("Not Implemented"); },
	        enumerable: true,
	        configurable: true
	    });
	    return BaseService;
	})();
	exports.BaseService = BaseService;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var base_service_1 = __webpack_require__(4);
	var BrandService = (function (_super) {
	    __extends(BrandService, _super);
	    function BrandService($q, apiEndpoint, fetch) {
	        _super.call(this, $q, apiEndpoint, fetch);
	    }
	    Object.defineProperty(BrandService.prototype, "baseUri", {
	        get: function () { return this.apiEndpoint.getBaseUrl() + "/brand"; },
	        enumerable: true,
	        configurable: true
	    });
	    return BrandService;
	})(base_service_1.BaseService);
	exports.BrandService = BrandService;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var base_service_1 = __webpack_require__(4);
	var GalleryService = (function (_super) {
	    __extends(GalleryService, _super);
	    function GalleryService($q, apiEndpoint, fetch) {
	        _super.call(this, $q, apiEndpoint, fetch);
	    }
	    Object.defineProperty(GalleryService.prototype, "baseUri", {
	        get: function () { return this.apiEndpoint.getBaseUrl() + "/gallery"; },
	        enumerable: true,
	        configurable: true
	    });
	    return GalleryService;
	})(base_service_1.BaseService);
	exports.GalleryService = GalleryService;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var base_service_1 = __webpack_require__(4);
	var PhotoService = (function (_super) {
	    __extends(PhotoService, _super);
	    function PhotoService($q, apiEndpoint, fetch) {
	        _super.call(this, $q, apiEndpoint, fetch);
	    }
	    Object.defineProperty(PhotoService.prototype, "baseUri", {
	        get: function () { return this.apiEndpoint.getBaseUrl() + "/photo"; },
	        enumerable: true,
	        configurable: true
	    });
	    return PhotoService;
	})(base_service_1.BaseService);
	exports.PhotoService = PhotoService;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var base_service_1 = __webpack_require__(4);
	var SearchService = (function (_super) {
	    __extends(SearchService, _super);
	    function SearchService($q, apiEndpoint, fetch) {
	        _super.call(this, $q, apiEndpoint, fetch);
	    }
	    Object.defineProperty(SearchService.prototype, "baseUri", {
	        get: function () { return this.apiEndpoint.getBaseUrl() + "/search"; },
	        enumerable: true,
	        configurable: true
	    });
	    return SearchService;
	})(base_service_1.BaseService);
	exports.SearchService = SearchService;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var base_service_1 = __webpack_require__(4);
	var TagService = (function (_super) {
	    __extends(TagService, _super);
	    function TagService($q, apiEndpoint, fetch) {
	        _super.call(this, $q, apiEndpoint, fetch);
	    }
	    Object.defineProperty(TagService.prototype, "baseUri", {
	        get: function () { return this.apiEndpoint.getBaseUrl() + "/tag"; },
	        enumerable: true,
	        configurable: true
	    });
	    return TagService;
	})(base_service_1.BaseService);
	exports.TagService = TagService;


/***/ },
/* 10 */
/***/ function(module, exports) {

	var UserService = (function () {
	    function UserService($q, apiEndpoint, fetch, formEncode) {
	        var _this = this;
	        this.$q = $q;
	        this.apiEndpoint = apiEndpoint;
	        this.fetch = fetch;
	        this.formEncode = formEncode;
	        this.tryToLogin = function (options) {
	            var deferred = _this.$q.defer();
	            angular.extend(options.data, { grant_type: "password" });
	            var formEncodedData = _this.formEncode(options.data);
	            var headers = { "Content-Type": "application/x-www-form-urlencoded" };
	            _this.fetch.fromService({ method: "POST", url: _this.baseUri + "/token", data: formEncodedData, headers: headers }).then(function (results) {
	                deferred.resolve(results.data);
	            }).catch(function (error) {
	                deferred.resolve(error);
	            });
	            return deferred.promise;
	        };
	    }
	    Object.defineProperty(UserService.prototype, "baseUri", {
	        get: function () { return this.apiEndpoint.getBaseUrl() + "/user"; },
	        enumerable: true,
	        configurable: true
	    });
	    return UserService;
	})();
	exports.UserService = UserService;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var actions = __webpack_require__(12);
	var app = angular.module("actions", ["services", "store"]);
	app.service("authorActionCreator", ["authorService", "dispatcher", "guid", actions.AuthorActionCreator]);
	app.service("brandActionCreator", ["brandService", "dispatcher", "guid", actions.BrandActionCreator]);
	app.service("galleryActionCreator", ["dispatcher", "galleryService", "guid", actions.GalleryActionCreator]);
	app.service("tabActionCreator", ["dispatcher", actions.TabActionCreator]);
	app.service("tagActionCreator", ["dispatcher", "guid", "tagService", actions.TagActionCreator]);
	app.service("userActionCreator", ["dispatcher", "guid", "userService", actions.UserActionCreator]);
	app.service("photoActionCreator", ["photoService", "dispatcher", "guid", actions.PhotoActionCreator]);


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(13));
	__export(__webpack_require__(14));
	__export(__webpack_require__(15));
	__export(__webpack_require__(17));
	__export(__webpack_require__(18));
	__export(__webpack_require__(19));
	__export(__webpack_require__(20));
	__export(__webpack_require__(21));
	__export(__webpack_require__(22));
	__export(__webpack_require__(23));


/***/ },
/* 13 */
/***/ function(module, exports) {

	var AuthorActionCreator = (function () {
	    function AuthorActionCreator(authorService, dispatcher, guid) {
	        var _this = this;
	        this.authorService = authorService;
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	        this.getById = function (options) {
	            var newId = _this.guid();
	            _this.authorService.get().then(function (results) {
	                var action = new AddOrUpdateAuthorAction(newId, results);
	                _this.dispatcher.dispatch(action);
	            });
	            return newId;
	        };
	        this.all = function () {
	            var newId = _this.guid();
	            _this.authorService.get().then(function (results) {
	                var action = new AllAuthorsAction(newId, results);
	                _this.dispatcher.dispatch(action);
	            });
	            return newId;
	        };
	        this.add = function (options) {
	            var newId = _this.guid();
	            _this.authorService.add({ data: options.data }).then(function (results) {
	                var action = new AddOrUpdateAuthorAction(newId, results);
	                _this.dispatcher.dispatch(action);
	            });
	            return newId;
	        };
	    }
	    return AuthorActionCreator;
	})();
	exports.AuthorActionCreator = AuthorActionCreator;
	var AddOrUpdateAuthorAction = (function () {
	    function AddOrUpdateAuthorAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return AddOrUpdateAuthorAction;
	})();
	exports.AddOrUpdateAuthorAction = AddOrUpdateAuthorAction;
	var AllAuthorsAction = (function () {
	    function AllAuthorsAction(id, entities) {
	        this.id = id;
	        this.entities = entities;
	    }
	    return AllAuthorsAction;
	})();
	exports.AllAuthorsAction = AllAuthorsAction;
	var RemoveAuthorAction = (function () {
	    function RemoveAuthorAction(id, entityId) {
	        this.id = id;
	        this.entityId = entityId;
	    }
	    return RemoveAuthorAction;
	})();
	exports.RemoveAuthorAction = RemoveAuthorAction;
	var AuthorsFilterAction = (function () {
	    function AuthorsFilterAction(id, term) {
	        this.id = id;
	        this.term = term;
	    }
	    return AuthorsFilterAction;
	})();
	exports.AuthorsFilterAction = AuthorsFilterAction;
	var SetCurrentAuthorAction = (function () {
	    function SetCurrentAuthorAction(id, entityId) {
	        this.id = id;
	        this.entityId = entityId;
	    }
	    return SetCurrentAuthorAction;
	})();
	exports.SetCurrentAuthorAction = SetCurrentAuthorAction;


/***/ },
/* 14 */
/***/ function(module, exports) {

	var BrandActionCreator = (function () {
	    function BrandActionCreator(brandService, dispatcher, guid) {
	        var _this = this;
	        this.brandService = brandService;
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	        this.get = function () {
	            var newId = _this.guid();
	            _this.brandService.get().then(function (results) {
	                var action = new AllBrandsAction(newId, results);
	                _this.dispatcher.dispatch(action);
	            });
	            return newId;
	        };
	        this.addBrand = function (options) {
	            var newId = _this.guid();
	            _this.brandService.add({ data: options.data }).then(function (results) {
	                var action = new AddOrUpdateBrandAction(newId, results);
	                _this.dispatcher.dispatch(action);
	            });
	            return newId;
	        };
	        this.getById = function (options) {
	            var newId = _this.guid();
	            _this.brandService.get().then(function (results) {
	                var action = new AddOrUpdateBrandAction(newId, results);
	                _this.dispatcher.dispatch(action);
	            });
	            return newId;
	        };
	    }
	    return BrandActionCreator;
	})();
	exports.BrandActionCreator = BrandActionCreator;
	var AddOrUpdateBrandAction = (function () {
	    function AddOrUpdateBrandAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return AddOrUpdateBrandAction;
	})();
	exports.AddOrUpdateBrandAction = AddOrUpdateBrandAction;
	var AllBrandsAction = (function () {
	    function AllBrandsAction(id, entities) {
	        this.id = id;
	        this.entities = entities;
	    }
	    return AllBrandsAction;
	})();
	exports.AllBrandsAction = AllBrandsAction;
	var RemoveBrandAction = (function () {
	    function RemoveBrandAction(id, entityId) {
	        this.id = id;
	        this.entityId = entityId;
	    }
	    return RemoveBrandAction;
	})();
	exports.RemoveBrandAction = RemoveBrandAction;
	var BrandsFilterAction = (function () {
	    function BrandsFilterAction(id, term) {
	        this.id = id;
	        this.term = term;
	    }
	    return BrandsFilterAction;
	})();
	exports.BrandsFilterAction = BrandsFilterAction;
	var SetCurrentBrandAction = (function () {
	    function SetCurrentBrandAction(id, entityId) {
	        this.id = id;
	        this.entityId = entityId;
	    }
	    return SetCurrentBrandAction;
	})();
	exports.SetCurrentBrandAction = SetCurrentBrandAction;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var base_actions_1 = __webpack_require__(16);
	var GalleryActionCreator = (function (_super) {
	    __extends(GalleryActionCreator, _super);
	    function GalleryActionCreator(dispatcher, galleryService, guid) {
	        _super.call(this, galleryService, dispatcher, guid, AddOrUpdateGalleryAction, AllGalleriesAction, RemoveGalleryAction);
	    }
	    return GalleryActionCreator;
	})(base_actions_1.BaseActionCreator);
	exports.GalleryActionCreator = GalleryActionCreator;
	var AddOrUpdateGalleryAction = (function () {
	    function AddOrUpdateGalleryAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return AddOrUpdateGalleryAction;
	})();
	exports.AddOrUpdateGalleryAction = AddOrUpdateGalleryAction;
	var AllGalleriesAction = (function () {
	    function AllGalleriesAction(id, entities) {
	        this.id = id;
	        this.entities = entities;
	    }
	    return AllGalleriesAction;
	})();
	exports.AllGalleriesAction = AllGalleriesAction;
	var RemoveGalleryAction = (function () {
	    function RemoveGalleryAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return RemoveGalleryAction;
	})();
	exports.RemoveGalleryAction = RemoveGalleryAction;
	var GallerysFilterAction = (function () {
	    function GallerysFilterAction(id, term) {
	        this.id = id;
	        this.term = term;
	    }
	    return GallerysFilterAction;
	})();
	exports.GallerysFilterAction = GallerysFilterAction;
	var SetCurrentGalleryAction = (function () {
	    function SetCurrentGalleryAction(id, entityId) {
	        this.id = id;
	        this.entityId = entityId;
	    }
	    return SetCurrentGalleryAction;
	})();
	exports.SetCurrentGalleryAction = SetCurrentGalleryAction;


/***/ },
/* 16 */
/***/ function(module, exports) {

	var BaseActionCreator = (function () {
	    function BaseActionCreator(service, dispatcher, guid, addOrUpdateAction, allAction, removeAction) {
	        var _this = this;
	        this.service = service;
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	        this.addOrUpdateAction = addOrUpdateAction;
	        this.allAction = allAction;
	        this.removeAction = removeAction;
	        this.getById = function (options) {
	            var newId = _this.guid();
	            _this.service.get().then(function (results) {
	                var action = new _this.addOrUpdateAction(newId, results);
	                _this.dispatcher.dispatch(action);
	            });
	            return newId;
	        };
	        this.all = function () {
	            var newId = _this.guid();
	            _this.service.get().then(function (results) {
	                var action = new _this.allAction(newId, results);
	                _this.dispatcher.dispatch(action);
	            });
	            return newId;
	        };
	        this.addOrUpdate = function (options) {
	            var newId = _this.guid();
	            _this.service.add({ data: options.data }).then(function (results) {
	                var action = new _this.addOrUpdateAction(newId, results);
	                _this.dispatcher.dispatch(action);
	            });
	            return newId;
	        };
	        this.remove = function (options) {
	            var newId = _this.guid();
	            _this.service.remove({
	                id: options.entity.id
	            }).then(function (results) {
	                _this.dispatcher.dispatch(new _this.removeAction(newId, options.entity));
	            });
	            return newId;
	        };
	    }
	    return BaseActionCreator;
	})();
	exports.BaseActionCreator = BaseActionCreator;
	var AddOrUpdateAuthorAction = (function () {
	    function AddOrUpdateAuthorAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return AddOrUpdateAuthorAction;
	})();
	exports.AddOrUpdateAuthorAction = AddOrUpdateAuthorAction;
	var AllAuthorsAction = (function () {
	    function AllAuthorsAction(id, entities) {
	        this.id = id;
	        this.entities = entities;
	    }
	    return AllAuthorsAction;
	})();
	exports.AllAuthorsAction = AllAuthorsAction;
	var RemoveAuthorAction = (function () {
	    function RemoveAuthorAction(id, entityId) {
	        this.id = id;
	        this.entityId = entityId;
	    }
	    return RemoveAuthorAction;
	})();
	exports.RemoveAuthorAction = RemoveAuthorAction;
	var AuthorsFilterAction = (function () {
	    function AuthorsFilterAction(id, term) {
	        this.id = id;
	        this.term = term;
	    }
	    return AuthorsFilterAction;
	})();
	exports.AuthorsFilterAction = AuthorsFilterAction;
	var SetCurrentAuthorAction = (function () {
	    function SetCurrentAuthorAction(id, entityId) {
	        this.id = id;
	        this.entityId = entityId;
	    }
	    return SetCurrentAuthorAction;
	})();
	exports.SetCurrentAuthorAction = SetCurrentAuthorAction;


/***/ },
/* 17 */
/***/ function(module, exports) {

	var PhotoActionCreator = (function () {
	    function PhotoActionCreator(photoService, dispatcher, guid) {
	        var _this = this;
	        this.photoService = photoService;
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	        this.getById = function (options) {
	            var newId = _this.guid();
	            _this.photoService.get().then(function (results) {
	                var action = new AddOrUpdatePhotoAction(newId, results);
	                _this.dispatcher.dispatch(action);
	            });
	            return newId;
	        };
	        this.get = function () {
	            var newId = _this.guid();
	            _this.photoService.get().then(function (results) {
	                var action = new AllPhotosAction(newId, results);
	                _this.dispatcher.dispatch(action);
	            });
	            return newId;
	        };
	        this.add = function (options) {
	            var newId = _this.guid();
	            _this.photoService.add({ data: options.data }).then(function (results) {
	                var action = new AddOrUpdatePhotoAction(newId, results);
	                _this.dispatcher.dispatch(action);
	            });
	            return newId;
	        };
	    }
	    return PhotoActionCreator;
	})();
	exports.PhotoActionCreator = PhotoActionCreator;
	var AddOrUpdatePhotoAction = (function () {
	    function AddOrUpdatePhotoAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return AddOrUpdatePhotoAction;
	})();
	exports.AddOrUpdatePhotoAction = AddOrUpdatePhotoAction;
	var AllPhotosAction = (function () {
	    function AllPhotosAction(id, entities) {
	        this.id = id;
	        this.entities = entities;
	    }
	    return AllPhotosAction;
	})();
	exports.AllPhotosAction = AllPhotosAction;
	var RemovePhotoAction = (function () {
	    function RemovePhotoAction(id, entityId) {
	        this.id = id;
	        this.entityId = entityId;
	    }
	    return RemovePhotoAction;
	})();
	exports.RemovePhotoAction = RemovePhotoAction;
	var PhotosFilterAction = (function () {
	    function PhotosFilterAction(id, term) {
	        this.id = id;
	        this.term = term;
	    }
	    return PhotosFilterAction;
	})();
	exports.PhotosFilterAction = PhotosFilterAction;
	var SetCurrentPhotoAction = (function () {
	    function SetCurrentPhotoAction(id, entityId) {
	        this.id = id;
	        this.entityId = entityId;
	    }
	    return SetCurrentPhotoAction;
	})();
	exports.SetCurrentPhotoAction = SetCurrentPhotoAction;


/***/ },
/* 18 */
/***/ function(module, exports) {

	var UserActionCreator = (function () {
	    function UserActionCreator(dispatcher, guid, userService) {
	        var _this = this;
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	        this.userService = userService;
	        this.tryToLogin = function (options) {
	            var newId = _this.guid();
	            _this.userService.tryToLogin({
	                data: {
	                    username: options.username,
	                    password: options.password
	                }
	            }).then(function (results) {
	                _this.dispatcher.dispatch(new UserLoggedInAction(newId, results));
	            });
	            return newId;
	        };
	    }
	    return UserActionCreator;
	})();
	exports.UserActionCreator = UserActionCreator;
	var AddUserAction = (function () {
	    function AddUserAction(entity) {
	        this.entity = entity;
	    }
	    return AddUserAction;
	})();
	exports.AddUserAction = AddUserAction;
	var AllUsersAction = (function () {
	    function AllUsersAction(entities) {
	        this.entities = entities;
	    }
	    return AllUsersAction;
	})();
	exports.AllUsersAction = AllUsersAction;
	var RemoveUserAction = (function () {
	    function RemoveUserAction(id) {
	        this.id = id;
	    }
	    return RemoveUserAction;
	})();
	exports.RemoveUserAction = RemoveUserAction;
	var UsersFilterAction = (function () {
	    function UsersFilterAction(term) {
	        this.term = term;
	    }
	    return UsersFilterAction;
	})();
	exports.UsersFilterAction = UsersFilterAction;
	var UserLoggedInAction = (function () {
	    function UserLoggedInAction(id, userData) {
	        this.id = id;
	        this.userData = userData;
	    }
	    return UserLoggedInAction;
	})();
	exports.UserLoggedInAction = UserLoggedInAction;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var base_actions_1 = __webpack_require__(16);
	var TagActionCreator = (function (_super) {
	    __extends(TagActionCreator, _super);
	    function TagActionCreator(dispatcher, guid, tagService) {
	        _super.call(this, tagService, dispatcher, guid, AddOrUpdateTagAction, AllTagsAction, RemoveTagAction);
	    }
	    return TagActionCreator;
	})(base_actions_1.BaseActionCreator);
	exports.TagActionCreator = TagActionCreator;
	var SetCurrentTagAction = (function () {
	    function SetCurrentTagAction(entity) {
	        this.entity = entity;
	    }
	    return SetCurrentTagAction;
	})();
	exports.SetCurrentTagAction = SetCurrentTagAction;
	var AddOrUpdateTagAction = (function () {
	    function AddOrUpdateTagAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return AddOrUpdateTagAction;
	})();
	exports.AddOrUpdateTagAction = AddOrUpdateTagAction;
	var AllTagsAction = (function () {
	    function AllTagsAction(id, entities) {
	        this.id = id;
	        this.entities = entities;
	    }
	    return AllTagsAction;
	})();
	exports.AllTagsAction = AllTagsAction;
	var RemoveTagAction = (function () {
	    function RemoveTagAction(id, entityId) {
	        this.id = id;
	        this.entityId = entityId;
	    }
	    return RemoveTagAction;
	})();
	exports.RemoveTagAction = RemoveTagAction;
	var TagsFilterAction = (function () {
	    function TagsFilterAction(id, term) {
	        this.id = id;
	        this.term = term;
	    }
	    return TagsFilterAction;
	})();
	exports.TagsFilterAction = TagsFilterAction;


/***/ },
/* 20 */
/***/ function(module, exports) {

	var TabActionCreator = (function () {
	    function TabActionCreator(dispatcher) {
	        var _this = this;
	        this.dispatcher = dispatcher;
	        this.setCurrentTab = function (options) { return _this.dispatcher.dispatch(new SetCurrentTabAction(options.tabName, options.index)); };
	        this.tabChildLoaded = function () { return _this.dispatcher.dispatch(new TabChildLoadedAction()); };
	    }
	    return TabActionCreator;
	})();
	exports.TabActionCreator = TabActionCreator;
	var SetCurrentTabAction = (function () {
	    function SetCurrentTabAction(tabName, index) {
	        this.tabName = tabName;
	        this.index = index;
	    }
	    return SetCurrentTabAction;
	})();
	exports.SetCurrentTabAction = SetCurrentTabAction;
	var TabChildLoadedAction = (function () {
	    function TabChildLoadedAction() {
	    }
	    return TabChildLoadedAction;
	})();
	exports.TabChildLoadedAction = TabChildLoadedAction;


/***/ },
/* 21 */
/***/ function(module, exports) {

	var DescriptionActionCreator = (function () {
	    function DescriptionActionCreator(descriptionService, dispatcher, guid) {
	        var _this = this;
	        this.descriptionService = descriptionService;
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	        this.getById = function (options) {
	            var newId = _this.guid();
	            _this.descriptionService.get().then(function (results) {
	                var action = new AddOrUpdateDescriptionAction(newId, results);
	                _this.dispatcher.dispatch(action);
	            });
	            return newId;
	        };
	        this.get = function () {
	            var newId = _this.guid();
	            _this.descriptionService.get().then(function (results) {
	                var action = new AllDescriptionsAction(newId, results);
	                _this.dispatcher.dispatch(action);
	            });
	            return newId;
	        };
	        this.addDescription = function (options) {
	            var newId = _this.guid();
	            _this.descriptionService.add({ data: options.data }).then(function (results) {
	                var action = new AddOrUpdateDescriptionAction(newId, results);
	                _this.dispatcher.dispatch(action);
	            });
	            return newId;
	        };
	    }
	    return DescriptionActionCreator;
	})();
	exports.DescriptionActionCreator = DescriptionActionCreator;
	var AddOrUpdateDescriptionAction = (function () {
	    function AddOrUpdateDescriptionAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return AddOrUpdateDescriptionAction;
	})();
	exports.AddOrUpdateDescriptionAction = AddOrUpdateDescriptionAction;
	var AllDescriptionsAction = (function () {
	    function AllDescriptionsAction(id, entities) {
	        this.id = id;
	        this.entities = entities;
	    }
	    return AllDescriptionsAction;
	})();
	exports.AllDescriptionsAction = AllDescriptionsAction;
	var RemoveDescriptionAction = (function () {
	    function RemoveDescriptionAction(id, entityId) {
	        this.id = id;
	        this.entityId = entityId;
	    }
	    return RemoveDescriptionAction;
	})();
	exports.RemoveDescriptionAction = RemoveDescriptionAction;
	var DescriptionsFilterAction = (function () {
	    function DescriptionsFilterAction(id, term) {
	        this.id = id;
	        this.term = term;
	    }
	    return DescriptionsFilterAction;
	})();
	exports.DescriptionsFilterAction = DescriptionsFilterAction;
	var SetCurrentDescriptionAction = (function () {
	    function SetCurrentDescriptionAction(id, entityId) {
	        this.id = id;
	        this.entityId = entityId;
	    }
	    return SetCurrentDescriptionAction;
	})();
	exports.SetCurrentDescriptionAction = SetCurrentDescriptionAction;


/***/ },
/* 22 */
/***/ function(module, exports) {

	var SearchActionCreator = (function () {
	    function SearchActionCreator(dispatcher, guid, searchService) {
	        var _this = this;
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	        this.searchService = searchService;
	        this.query = function (options) {
	            var newId = _this.guid();
	            _this.searchService.query({ term: options.term })
	                .then(function (results) { return _this.dispatcher.dispatch(new SearchQueryAction(newId, options.term, results)); });
	            return newId;
	        };
	    }
	    return SearchActionCreator;
	})();
	exports.SearchActionCreator = SearchActionCreator;
	var SearchQueryAction = (function () {
	    function SearchQueryAction(id, term, results) {
	        this.id = id;
	        this.term = term;
	        this.results = results;
	    }
	    return SearchQueryAction;
	})();
	exports.SearchQueryAction = SearchQueryAction;


/***/ },
/* 23 */
/***/ function(module, exports) {

	var SponsorActionCreator = (function () {
	    function SponsorActionCreator(sponsorService, dispatcher, guid) {
	        var _this = this;
	        this.sponsorService = sponsorService;
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	        this.get = function () {
	            var newId = _this.guid();
	            _this.sponsorService.get().then(function (results) {
	                var action = new AllSponsorsAction(newId, results);
	                _this.dispatcher.dispatch(action);
	            });
	            return newId;
	        };
	        this.addSponsor = function (options) {
	            var newId = _this.guid();
	            _this.sponsorService.add({ data: options.data }).then(function (results) {
	                var action = new AddOrUpdateSponsorAction(newId, results);
	                _this.dispatcher.dispatch(action);
	            });
	            return newId;
	        };
	        this.getById = function (options) {
	            var newId = _this.guid();
	            _this.sponsorService.getById({ id: options.id }).then(function (results) {
	                var action = new AddOrUpdateSponsorAction(newId, results);
	                _this.dispatcher.dispatch(action);
	            });
	            return newId;
	        };
	    }
	    return SponsorActionCreator;
	})();
	exports.SponsorActionCreator = SponsorActionCreator;
	var AddOrUpdateSponsorAction = (function () {
	    function AddOrUpdateSponsorAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return AddOrUpdateSponsorAction;
	})();
	exports.AddOrUpdateSponsorAction = AddOrUpdateSponsorAction;
	var AllSponsorsAction = (function () {
	    function AllSponsorsAction(id, entities) {
	        this.id = id;
	        this.entities = entities;
	    }
	    return AllSponsorsAction;
	})();
	exports.AllSponsorsAction = AllSponsorsAction;
	var RemoveSponsorAction = (function () {
	    function RemoveSponsorAction(id, entityId) {
	        this.id = id;
	        this.entityId = entityId;
	    }
	    return RemoveSponsorAction;
	})();
	exports.RemoveSponsorAction = RemoveSponsorAction;
	var SponsorsFilterAction = (function () {
	    function SponsorsFilterAction(id, term) {
	        this.id = id;
	        this.term = term;
	    }
	    return SponsorsFilterAction;
	})();
	exports.SponsorsFilterAction = SponsorsFilterAction;
	var SetCurrentSponsorAction = (function () {
	    function SetCurrentSponsorAction(id, entityId) {
	        this.id = id;
	        this.entityId = entityId;
	    }
	    return SetCurrentSponsorAction;
	})();
	exports.SetCurrentSponsorAction = SetCurrentSponsorAction;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var components = __webpack_require__(25);
	var app = angular.module("components", ["store"]);
	for (var componentName in components) {
	    app.component(components[componentName].config);
	}


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(26));
	__export(__webpack_require__(28));
	__export(__webpack_require__(29));
	__export(__webpack_require__(30));
	__export(__webpack_require__(31));
	__export(__webpack_require__(32));
	__export(__webpack_require__(33));
	__export(__webpack_require__(34));
	__export(__webpack_require__(35));
	__export(__webpack_require__(36));
	__export(__webpack_require__(37));
	__export(__webpack_require__(38));
	__export(__webpack_require__(39));


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var component_decorators_1 = __webpack_require__(27);
	var authorListComponent = (function () {
	    function authorListComponent($location, authorActionCreator) {
	        var _this = this;
	        this.$location = $location;
	        this.authorActionCreator = authorActionCreator;
	        this.storeOnChange = function (state) { return _this.entities = state.authors; };
	        this.remove = function (author) { return _this.authorActionCreator.remove({ author: author }); };
	    }
	    authorListComponent = __decorate([
	        component_decorators_1.Component({
	            route: "/author/list",
	            templateUrl: "wwwroot/components/author/author-list.html",
	            selector: "author-list",
	            providers: ["$location", "authorActionCreator"]
	        }),
	        component_decorators_1.CanActivate([
	            "authorActionCreator", "invokeAsync",
	            function (authorActionCreator, invokeAsync) { return invokeAsync(authorActionCreator.all); }
	        ]), 
	        __metadata('design:paramtypes', [Object, Object])
	    ], authorListComponent);
	    return authorListComponent;
	})();
	exports.authorListComponent = authorListComponent;


/***/ },
/* 27 */
/***/ function(module, exports) {

	function Component(config) {
	    if (config === void 0) { config = {}; }
	    return function (cls) {
	        config.component = cls;
	        cls.config = config;
	    };
	}
	exports.Component = Component;
	function CanActivate(fnDefinition) {
	    return function (cls) {
	        cls.prototype.canActivate = function () {
	            return fnDefinition;
	        };
	    };
	}
	exports.CanActivate = CanActivate;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var component_decorators_1 = __webpack_require__(27);
	var HomeComponent = (function () {
	    function HomeComponent() {
	    }
	    HomeComponent = __decorate([
	        component_decorators_1.Component({
	            templateUrl: "wwwroot/components/general/home.html",
	            selector: "home"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], HomeComponent);
	    return HomeComponent;
	})();
	exports.HomeComponent = HomeComponent;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var component_decorators_1 = __webpack_require__(27);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    AppComponent = __decorate([
	        component_decorators_1.Component({
	            templateUrl: "wwwroot/components/general/app.html",
	            selector: "app"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	})();
	exports.AppComponent = AppComponent;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var component_decorators_1 = __webpack_require__(27);
	var PhotoUploadComponent = (function () {
	    function PhotoUploadComponent($attrs, $element, $http, $routeParams, $scope) {
	        var _this = this;
	        this.$attrs = $attrs;
	        this.$element = $element;
	        this.$http = $http;
	        this.$routeParams = $routeParams;
	        this.$scope = $scope;
	        this.storeOnChange = function (state) { return _this.token = state.token; };
	        this.ngOnInit = function () {
	            var drop = null;
	            for (var i = 0; i < _this.$element[0].children.length; i++) {
	                if (_this.$element[0].children[i].className == "photoUpload-dropZone") {
	                    drop = _this.$element[0].children[i];
	                    break;
	                }
	            }
	            drop.addEventListener("dragover", function (dragEvent) {
	                dragEvent.stopPropagation();
	                dragEvent.preventDefault();
	            }, false);
	            drop.addEventListener("drop", function (dragEvent) {
	                dragEvent.stopPropagation();
	                dragEvent.preventDefault();
	                var scope = angular.element(dragEvent.currentTarget).scope();
	                var galleryId = scope.vm.$attrs.galleryId;
	                if (dragEvent.dataTransfer && dragEvent.dataTransfer.files) {
	                    var packageFiles = function (fileList) {
	                        var formData = new FormData();
	                        for (var i = 0; i < fileList.length; i++) {
	                            formData.append(fileList[i].name, fileList[i]);
	                        }
	                        return formData;
	                    };
	                    var xhr = new XMLHttpRequest();
	                    xhr.open("POST", "/api/photo/upload", true);
	                    xhr.setRequestHeader("x-galleryId", galleryId || 0);
	                    xhr.setRequestHeader("authorization", "Bearer " + _this.token);
	                    xhr.onload = function (e) {
	                        if (xhr.readyState === 4) {
	                            if (xhr.status === 200) {
	                            }
	                            else {
	                                console.error(xhr.statusText);
	                            }
	                        }
	                    };
	                    xhr.send(packageFiles(dragEvent.dataTransfer.files));
	                    return "";
	                }
	            }, false);
	        };
	    }
	    PhotoUploadComponent = __decorate([
	        component_decorators_1.Component({
	            templateUrl: "wwwroot/components/photo/photo-upload.html",
	            selector: "photo-upload",
	            providers: ["$attrs", "$element", "$http", "$routeParams", "$scope"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Function, Object, Object])
	    ], PhotoUploadComponent);
	    return PhotoUploadComponent;
	})();
	exports.PhotoUploadComponent = PhotoUploadComponent;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var component_decorators_1 = __webpack_require__(27);
	var HeaderComponent = (function () {
	    function HeaderComponent($rootScope, $route) {
	        var _this = this;
	        this.$rootScope = $rootScope;
	        this.$route = $route;
	        this.currentPath = null;
	        $rootScope.$on("$viewContentLoaded", function () { _this.currentPath = $route.current.$$route.originalPath; });
	    }
	    HeaderComponent = __decorate([
	        component_decorators_1.Component({
	            templateUrl: "wwwroot/components/general/header.html",
	            selector: "app-header",
	            providers: ["$rootScope", "$route"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object])
	    ], HeaderComponent);
	    return HeaderComponent;
	})();
	exports.HeaderComponent = HeaderComponent;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var component_decorators_1 = __webpack_require__(27);
	var LoginComponent = (function () {
	    function LoginComponent(invokeAsync, loginRedirect, userActionCreator) {
	        var _this = this;
	        this.invokeAsync = invokeAsync;
	        this.loginRedirect = loginRedirect;
	        this.userActionCreator = userActionCreator;
	        this.tryToLogin = function () {
	            _this.invokeAsync({
	                action: _this.userActionCreator.tryToLogin,
	                params: { username: _this.username, password: _this.password }
	            }).then(function (results) {
	                _this.loginRedirect.redirectPreLogin();
	            });
	        };
	        this.username = "quinntyne@hotmail.com";
	        this.password = "password";
	    }
	    LoginComponent = __decorate([
	        component_decorators_1.Component({
	            templateUrl: "wwwroot/components/general/login.html",
	            selector: "login",
	            providers: ["invokeAsync", "loginRedirect", "userActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object])
	    ], LoginComponent);
	    return LoginComponent;
	})();
	exports.LoginComponent = LoginComponent;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var component_decorators_1 = __webpack_require__(27);
	var GalleryListComponent = (function () {
	    function GalleryListComponent($location, galleryActionCreator) {
	        var _this = this;
	        this.$location = $location;
	        this.galleryActionCreator = galleryActionCreator;
	        this.storeOnChange = function (state) { return _this.entities = state.galleries; };
	        this.remove = function (gallery) { return _this.galleryActionCreator.remove({ gallery: gallery }); };
	        this.photoUpload = function (gallery) { return _this.$location.path("/photo/upload/" + gallery.id); };
	    }
	    GalleryListComponent = __decorate([
	        component_decorators_1.Component({
	            route: "/gallery/list",
	            templateUrl: "wwwroot/components/gallery/gallery-list.html",
	            selector: "gallery-list",
	            providers: ["$location", "galleryActionCreator"]
	        }),
	        component_decorators_1.CanActivate([
	            "galleryActionCreator", "invokeAsync",
	            function (galleryActionCreator, invokeAsync) { return invokeAsync(galleryActionCreator.all); }
	        ]), 
	        __metadata('design:paramtypes', [Object, Object])
	    ], GalleryListComponent);
	    return GalleryListComponent;
	})();
	exports.GalleryListComponent = GalleryListComponent;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var component_decorators_1 = __webpack_require__(27);
	var GalleryEditorComponent = (function () {
	    function GalleryEditorComponent($location, galleryActionCreator, invokeAsync) {
	        var _this = this;
	        this.$location = $location;
	        this.galleryActionCreator = galleryActionCreator;
	        this.invokeAsync = invokeAsync;
	        this.storeOnChange = function (state) {
	            //this.id = null;
	            //this.title = null;
	            //this.name = null;
	            //this.sponsor = null;
	            //this.sponsorId = null;
	            //this.photos = [];
	            //this.metaData = [];
	            //this.tags = [];
	            //this.openGraphData = [];
	        };
	        this.addOrUpdate = function () {
	            _this.invokeAsync({
	                action: _this.galleryActionCreator.addOrUpdate,
	                params: {
	                    data: {
	                        id: _this.id,
	                        title: _this.title,
	                        name: _this.name,
	                        description: _this.description,
	                        sponsorId: _this.sponsorId,
	                        photos: _this.photos,
	                        metaDate: _this.metaData,
	                        openGraphData: _this.openGraphData
	                    }
	                }
	            }).then(function () {
	                if (!_this.id && _this.entities.filter(function (entity) { return entity.name === _this.name; }).length > 0) {
	                }
	                else {
	                }
	            });
	        };
	        this.remove = function () { return _this.galleryActionCreator.remove({ id: _this.id }); };
	        this.entities = [];
	    }
	    GalleryEditorComponent = __decorate([
	        component_decorators_1.Component({
	            route: "/gallery/edit/:id",
	            templateUrl: "wwwroot/components/gallery/gallery-editor.html",
	            selector: "gallery-editor",
	            providers: ["$location", "galleryActionCreator", "invokeAsync"]
	        }),
	        component_decorators_1.CanActivate(["$route", "invokeAsync", "galleryActionCreator", function ($route, invokeAsync, galleryActionCreator) {
	                var id = $route.current.params.id;
	                return invokeAsync({
	                    action: galleryActionCreator.getById,
	                    params: { id: id }
	                });
	            }]), 
	        __metadata('design:paramtypes', [Object, Object, Object])
	    ], GalleryEditorComponent);
	    return GalleryEditorComponent;
	})();
	exports.GalleryEditorComponent = GalleryEditorComponent;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var actions_1 = __webpack_require__(12);
	var component_decorators_1 = __webpack_require__(27);
	var TagEditorComponent = (function () {
	    function TagEditorComponent($location, $routeParams, invokeAsync, tagActionCreator) {
	        var _this = this;
	        this.$location = $location;
	        this.$routeParams = $routeParams;
	        this.invokeAsync = invokeAsync;
	        this.tagActionCreator = tagActionCreator;
	        this.storeOnChange = function (state) {
	            if (state.lastTriggeredByAction == actions_1.RemoveTagAction && _this.entities.filter(function (entity) { return entity.id === _this.id; }).length < 1)
	                _this.$location.path(_this.baseUrl + "/list");
	            _this.entities = state.tags;
	        };
	        this.ngOnInit = function () {
	            if (_this.$routeParams["id"])
	                angular.extend(_this, angular.copy(_this.entities.filter(function (entity) { return entity.id == _this.$routeParams["id"]; })[0]));
	        };
	        this.addOrUpdate = function () {
	            alert("QB");
	            _this.invokeAsync({
	                action: _this.tagActionCreator.addOrUpdate,
	                params: {
	                    data: {
	                        id: _this.id,
	                        name: _this.name,
	                        description: _this.description,
	                    }
	                }
	            }).then(function () {
	                if (!_this.id && _this.entities.filter(function (entity) { return entity.name === _this.name; }).length > 0) {
	                    _this.$location.path(_this.baseUrl + "/edit/" + _this.entities.filter(function (entity) { return entity.name === _this.name; })[0].id);
	                }
	                else {
	                }
	            });
	        };
	        this.remove = function () { return _this.tagActionCreator.remove({ id: _this.id }); };
	    }
	    Object.defineProperty(TagEditorComponent.prototype, "baseUrl", {
	        get: function () { return "/tag"; },
	        enumerable: true,
	        configurable: true
	    });
	    TagEditorComponent.canActivate = function () {
	        return ["$route", "invokeAsync", "tagActionCreator", function ($route, invokeAsync, tagActionCreator) {
	                var id = $route.current.params.id;
	                return invokeAsync({
	                    action: tagActionCreator.getById,
	                    params: { id: id }
	                });
	            }];
	    };
	    TagEditorComponent = __decorate([
	        component_decorators_1.Component({
	            route: "/tag/edit/:id",
	            templateUrl: "wwwroot/components/tag/tag-editor.html",
	            selector: "tag-editor",
	            providers: ["$location", "$routeParams", "invokeAsync", "tagActionCreator"]
	        }),
	        component_decorators_1.CanActivate(["$route", "invokeAsync", "$routeParams", "tagActionCreator", function ($route, invokeAsync, tagActionCreator) {
	                var id = $route.current.params.id;
	                return invokeAsync({
	                    action: tagActionCreator.getById,
	                    params: { id: id }
	                });
	            }]), 
	        __metadata('design:paramtypes', [Object, Object, Object, actions_1.TagActionCreator])
	    ], TagEditorComponent);
	    return TagEditorComponent;
	})();
	exports.TagEditorComponent = TagEditorComponent;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var component_decorators_1 = __webpack_require__(27);
	var ButtonComponent = (function () {
	    function ButtonComponent() {
	    }
	    ButtonComponent = __decorate([
	        component_decorators_1.Component({
	            templateUrl: "wwwroot/components/shared/button.html",
	            selector: "pg-button",
	            componentName: "pgButtonComponent",
	            inputs: ['caption', 'onClick']
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ButtonComponent);
	    return ButtonComponent;
	})();
	exports.ButtonComponent = ButtonComponent;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var component_decorators_1 = __webpack_require__(27);
	var actions_1 = __webpack_require__(12);
	var TabContentComponent = (function () {
	    function TabContentComponent(tabActionCreator) {
	        var _this = this;
	        this.tabActionCreator = tabActionCreator;
	        this.storeOnChange = function (state) { };
	        this.ngOnInit = function () { return _this.tabActionCreator.tabChildLoaded(); };
	    }
	    TabContentComponent = __decorate([
	        component_decorators_1.Component({
	            templateUrl: "wwwroot/components/shared/tab-content.html",
	            selector: "tab-content",
	            providers: ["tabActionCreator"],
	            transclude: true
	        }), 
	        __metadata('design:paramtypes', [actions_1.TabActionCreator])
	    ], TabContentComponent);
	    return TabContentComponent;
	})();
	exports.TabContentComponent = TabContentComponent;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var component_decorators_1 = __webpack_require__(27);
	var actions_1 = __webpack_require__(12);
	var TabTitleComponent = (function () {
	    function TabTitleComponent($attrs, tabActionCreator) {
	        var _this = this;
	        this.$attrs = $attrs;
	        this.tabActionCreator = tabActionCreator;
	        this.storeOnChange = function (state) { };
	        this.ngOnInit = function () { return _this.tabActionCreator.tabChildLoaded(); };
	        this.onTabTitleClick = function () { return _this.tabActionCreator.setCurrentTab({
	            tabName: _this.$attrs.$$element[0].getAttribute("tabs-name"),
	            index: _this.$attrs.$$element[0].getAttribute("index")
	        }); };
	    }
	    TabTitleComponent = __decorate([
	        component_decorators_1.Component({
	            templateUrl: "wwwroot/components/shared/tab-title.html",
	            selector: "tab-title",
	            providers: ["$attrs", "tabActionCreator"],
	            transclude: true
	        }), 
	        __metadata('design:paramtypes', [Object, actions_1.TabActionCreator])
	    ], TabTitleComponent);
	    return TabTitleComponent;
	})();
	exports.TabTitleComponent = TabTitleComponent;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var actions_1 = __webpack_require__(12);
	var component_decorators_1 = __webpack_require__(27);
	var TabsComponent = (function () {
	    function TabsComponent($attrs, $element, tabActionCreator) {
	        var _this = this;
	        this.$attrs = $attrs;
	        this.$element = $element;
	        this.tabActionCreator = tabActionCreator;
	        this.storeOnChange = function (state) {
	            _this.currentIndex = state.tabIndex[_this.$attrs["tabsName"]] || 0;
	            if (state.lastTriggeredByAction === actions_1.SetCurrentTabAction) {
	                _this.updateCurrentTab();
	            }
	            if (state.lastTriggeredByAction === actions_1.TabChildLoadedAction) {
	                _this._titleElements = angular.element(_this.$element[0].querySelectorAll('.tab-title'));
	                _this._contentElements = angular.element(_this.$element[0].querySelectorAll('.tab-content'));
	                for (var i = 0; i < _this.titleElements.length; i++) {
	                    _this.titleElements[i].setAttribute("index", i.toString());
	                    _this.titleElements[i].setAttribute("tabs-name", _this.$attrs["tabsName"]);
	                }
	                _this.updateCurrentTab();
	            }
	        };
	        this.updateCurrentTab = function () {
	            for (var i = 0; i < _this.titleElements.length; i++) {
	                if (i != _this.currentIndex) {
	                    _this.titleElements[i].classList.remove("tabs-titleselected");
	                }
	                else {
	                    _this.titleElements[i].classList.add("tabs-titleselected");
	                }
	            }
	            for (var i = 0; i < _this.contentElements.length; i++) {
	                if (i != _this.currentIndex) {
	                    _this.contentElements[i].classList.add("tabs-contentInActive");
	                }
	                else {
	                    _this.contentElements[i].classList.remove("tabs-contentInActive");
	                }
	            }
	        };
	        this.currentIndex = 0;
	    }
	    Object.defineProperty(TabsComponent.prototype, "titleElements", {
	        get: function () { return this._titleElements; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TabsComponent.prototype, "contentElements", {
	        get: function () { return this._contentElements; },
	        enumerable: true,
	        configurable: true
	    });
	    TabsComponent = __decorate([
	        component_decorators_1.Component({
	            templateUrl: "wwwroot/components/shared/tabs.html",
	            selector: "tabs",
	            providers: ["$attrs", "$element", "tabActionCreator"],
	            transclude: {
	                'title': '?tabTitle',
	                'content': '?tabContent'
	            }
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object])
	    ], TabsComponent);
	    return TabsComponent;
	})();
	exports.TabsComponent = TabsComponent;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var reducers = __webpack_require__(41);
	var app = angular.module("reducers", [
	    "store"
	]);
	app.config(["reducersProvider", function (reducersProvider) {
	        reducersProvider.configure(reducers.addGalleryReducer);
	        reducersProvider.configure(reducers.allGalleriesReducer);
	        reducersProvider.configure(reducers.removeGalleryReducer);
	        reducersProvider.configure(reducers.userLoggedInReducer);
	        reducersProvider.configure(reducers.setCurrentTabReducer);
	        reducersProvider.configure(reducers.tabChildLoadedReducer);
	    }]);


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(42));
	__export(__webpack_require__(45));
	__export(__webpack_require__(46));
	__export(__webpack_require__(47));
	__export(__webpack_require__(48));
	angular.module("reducers", ["store"]).config(["reducersProvider", function (reducersProvider) {
	    }]);


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var actions_1 = __webpack_require__(12);
	var libs_1 = __webpack_require__(43);
	exports.removeGalleryReducer = function (state, action) {
	    if (action instanceof actions_1.RemoveGalleryAction)
	        libs_1.pluckOut({ items: state.galleries, value: action.entity.id });
	    return state;
	};
	exports.addGalleryReducer = function (state, action) {
	    if (action instanceof actions_1.AddOrUpdateGalleryAction) {
	        libs_1.addOrUpdate({ items: state.galleries, item: action.entity });
	    }
	    return state;
	};
	exports.allGalleriesReducer = function (state, action) {
	    if (action instanceof actions_1.AllGalleriesAction) {
	        state.galleries = action.entities;
	    }
	    return state;
	};


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	exports.addOrUpdate = angular.injector(['addOrUpdate']).get("addOrUpdate");
	__export(__webpack_require__(44));


/***/ },
/* 44 */
/***/ function(module, exports) {

	exports.pluckOut = function (options) {
	    for (var i = 0; i < options.items.length; i++) {
	        if (options.value == options.items[i][options.key || "id"]) {
	            options.items.splice(i, 1);
	        }
	    }
	    return options.items;
	};


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var libs_1 = __webpack_require__(43);
	var actions_1 = __webpack_require__(12);
	exports.addPhotoReducer = function (state, action) {
	    if (action instanceof actions_1.AddOrUpdatePhotoAction) {
	        libs_1.addOrUpdate({ items: state.photos, item: action.entity });
	    }
	    return state;
	};
	exports.allPhotosReducer = function (state, action) {
	    if (action instanceof actions_1.AllPhotosAction) {
	        state.photos = action.entities;
	    }
	    return state;
	};
	exports.removePhotoReducer = function (state, action) {
	    if (action instanceof actions_1.RemovePhotoAction)
	        libs_1.pluckOut({ items: state.galleries, value: action.entity });
	    return state;
	};


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var actions_1 = __webpack_require__(12);
	exports.setCurrentTabReducer = function (state, action) {
	    if (action instanceof actions_1.SetCurrentTabAction) {
	        state.tabIndex[action.tabName] = action.index;
	        state.lastTriggeredByAction = actions_1.SetCurrentTabAction;
	    }
	    return state;
	};
	exports.tabChildLoadedReducer = function (state, action) {
	    if (action instanceof actions_1.TabChildLoadedAction) {
	        state.lastTriggeredByAction = actions_1.TabChildLoadedAction;
	    }
	    return state;
	};


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var actions_1 = __webpack_require__(12);
	var libs_1 = __webpack_require__(43);
	exports.addTagReducer = function (state, action) {
	    if (action instanceof actions_1.AddOrUpdateTagAction) {
	        libs_1.addOrUpdate({ items: state.photos, item: action.entity });
	    }
	    return state;
	};
	exports.allTagsReducer = function (state, action) {
	    if (action instanceof actions_1.AllTagsAction) {
	        state.tags = action.entities;
	    }
	    return state;
	};
	exports.removeTagReducer = function (state, action) {
	    if (action instanceof actions_1.RemoveTagAction)
	        libs_1.pluckOut({ items: state.galleries, value: action.entity });
	    return state;
	};


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var actions_1 = __webpack_require__(12);
	exports.userLoggedInReducer = function (state, action) {
	    if (action instanceof actions_1.UserLoggedInAction) {
	        state.token = action.userData.access_token;
	    }
	    return state;
	};


/***/ }
/******/ ]);