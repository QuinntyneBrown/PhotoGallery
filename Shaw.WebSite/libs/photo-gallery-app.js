/******/ (function (modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/ 	var installedModules = {};

    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {

        /******/ 		// Check if module is in cache
        /******/ 		if (installedModules[moduleId])
            /******/ 			return installedModules[moduleId].exports;

        /******/ 		// Create a new module (and put it into the cache)
        /******/ 		var module = installedModules[moduleId] = {
            /******/ 			exports: {},
            /******/ 			id: moduleId,
            /******/ 			loaded: false
            /******/
        };

        /******/ 		// Execute the module function
        /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

        /******/ 		// Flag the module as loaded
        /******/ 		module.loaded = true;

        /******/ 		// Return the exports of the module
        /******/ 		return module.exports;
        /******/
    }


    /******/ 	// expose the modules object (__webpack_modules__)
    /******/ 	__webpack_require__.m = modules;

    /******/ 	// expose the module cache
    /******/ 	__webpack_require__.c = installedModules;

    /******/ 	// __webpack_public_path__
    /******/ 	__webpack_require__.p = "";

    /******/ 	// Load entry module and return exports
    /******/ 	return __webpack_require__(0);
    /******/
})
/************************************************************************/
/******/([
/* 0 */
/***/ function (module, exports, __webpack_require__) {

    /// <reference path="typings/tsd.d.ts" />
    /// <reference path="libs/component-extension.ts" />
    /// <reference path="components/photo-gallery/photo-gallery.component.ts" />
    "use strict";
    __webpack_require__(1);
    var photo_gallery_component_1 = __webpack_require__(2);
    var app = angular.module("photoGalleryApp", []);
    app.component(photo_gallery_component_1.PhotoGalleryComponent);
    angular.element(document).ready(function () { return angular.bootstrap(document.getElementById("photo-gallery-app"), ['photoGalleryApp']); });


    /***/
},
/* 1 */
/***/ function (module, exports) {

    var originalAngularModule = angular.module;
    var componentStyles = {};
    angular.module = function () {
        var m = originalAngularModule.apply(this, arguments);
        m.component = function (component) {
            var options = component.config;
            var styles;
            if (options.selector) {
                var componentNameCamelCase = options.selector.replace(/-([a-z])/g, function (g) {
                    return g[1].toUpperCase();
                });
            }
            if (options.component.canActivate) {
                m.config(["routeResolverServiceProvider", function (routeResolverServiceProvider) {
                    routeResolverServiceProvider.configure({
                        route: options.route,
                        routes: options.routes,
                        key: options.key,
                        promise: options.component.canActivate()
                    });
                }
                ]);
            }
            if (options.component.prototype.canActivate) {
                m.config(["routeResolverServiceProvider", function (routeResolverServiceProvider) {
                    routeResolverServiceProvider.configure({
                        route: options.route,
                        routes: options.routes,
                        key: options.key,
                        promise: options.component.prototype.canActivate()
                    });
                }
                ]);
            }
            var directiveDefinitionObject = {
                restrict: options.restrict || "E",
                template: angular.isArray(options.template) ? options.template.join(" \n ") : options.template,
                templateUrl: options.templateUrl,
                replace: options.replace || true,
                scope: options.scope || {},
                bindToController: options.bindToController || {},
                transclude: options.transclude,
                controllerAs: "vm",
                controller: componentNameCamelCase + "Component"
            };
            options.component.$inject = options.providers;
            if (options.inputs && options.inputs.length > 0) {
                for (var i = 0; i < options.inputs.length; i++) {
                    if (options.inputs[i].substring(0, 2) === "on") {
                        directiveDefinitionObject.bindToController[options.inputs[i]] = "&";
                    }
                    else {
                        directiveDefinitionObject.bindToController[options.inputs[i]] = "=";
                    }
                }
            }
            if ((options.component && options.component.styles) || options.styles) {
                styles = options.styles ? options.styles : options.component.styles;
                styles = angular.isArray(styles) ? styles.join(" \n ") : styles;
            }
            directiveDefinitionObject.compile = function () {
                return {
                    pre: function (scope, element, attributes, controller, transcludeFn) {
                        if (options.transclude)
                            transcludeFn(scope, function (clone) {
                            });
                        if (styles && !componentStyles[options.selector]) {
                            componentStyles[options.selector] = true;
                            function addStyleTagToHead() {
                                var style = document.createElement("style");
                                style.setAttribute("data-selector", options.selector);
                                style.appendChild(document.createTextNode(styles));
                                document.head.appendChild(style);
                            }
                            if (document.readyState === "complete" || document.readyState === 'interactive') {
                                addStyleTagToHead();
                            }
                            else {
                                function onDocumentLoad() {
                                    addStyleTagToHead();
                                    window.removeEventListener("DOMContentLoaded", onDocumentLoad);
                                }
                                window.addEventListener("DOMContentLoaded", onDocumentLoad);
                            }
                        }
                        var $injector = angular.element(document.body.childNodes[0]).injector();
                        var store = $injector.get("store");
                        var safeDigest = $injector.get("safeDigest");
                        if (scope.vm && scope.vm.storeOnChange) {
                            var subscription = store.subscribe(function (state) {
                                scope.vm.storeOnChange(state);
                                safeDigest(scope);
                            });
                            scope.$on("$destroy", function () { return subscription.dispose(); });
                        }
                    },
                    post: function (scope) {
                        if (options.transclude && scope.vm.$transclude)
                            scope.vm.$transclude(scope, function (clone) {
                                scope.vm.clone = clone;
                            });
                        if (scope.vm && scope.vm.ngOnInit)
                            scope.vm.ngOnInit();
                        if (scope.vm.ngOnDestroy)
                            scope.$on("$destroy", function () {
                                scope.vm.dispose();
                            });
                    }
                };
            };
            m.directive(componentNameCamelCase, [function () { return directiveDefinitionObject; }]);
            m.controller(options.componentName ? options.componentName : componentNameCamelCase + "Component", options.component);
        };
        return m;
    };
    //# sourceMappingURL=component-extension.js.map

    /***/
},
/* 2 */
/***/ function (module, exports, __webpack_require__) {

    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function (o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function (o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function (o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var component_decorators_1 = __webpack_require__(3);
    var PhotoGalleryComponent = (function () {
        function PhotoGalleryComponent($element) {
            this.$element = $element;
        }
        PhotoGalleryComponent = __decorate([
	        component_decorators_1.Component({
	            selector: "photo-gallery",
	            tempalteUrl: "./photo-gallery.component.html",
	            inputs: ["$element"]
	        }),
	        __metadata('design:paramtypes', [Object])
        ], PhotoGalleryComponent);
        return PhotoGalleryComponent;
    })();
    exports.PhotoGalleryComponent = PhotoGalleryComponent;
    //# sourceMappingURL=photo-gallery.component.js.map

    /***/
},
/* 3 */
/***/ function (module, exports) {

    function Component(config) {
        if (config === void 0) { config = {}; }
        return function (cls) {
            alert("wtf");
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
    //# sourceMappingURL=component-decorators.js.map

    /***/
}
/******/]);