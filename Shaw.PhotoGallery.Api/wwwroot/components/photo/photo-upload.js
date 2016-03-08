var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var component_decorators_1 = require("../../../libs/component-decorators");
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
//# sourceMappingURL=photo-upload.js.map