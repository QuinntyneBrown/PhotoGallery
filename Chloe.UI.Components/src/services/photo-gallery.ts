import { Overlay } from "./overlay";
import * as utilities from "../utilities";

export class PhotoGallery {
    constructor(private $compile: angular.ICompileService,
        private $q: angular.IQService,
        private $rootScope: angular.IRootScopeService,
        private $routeParams: angular.route.IRouteParamsService,
        private appendToBodyAsync:any,
        private extendCssAsync:any,
        private overlay: Overlay,
        private store: utilities.Store<any>
    ) {

        store.subscribe(this.storeOnChange);
    }

    onRouteChangeSuccess = () => {
        if ((this.$routeParams as any).gallerySlug) {
            this.openAsync();
        }
    };

    storeOnChange = state => { }

    openAsync = () => {
        var openAsyncFn = () => {
            return this.initializeAsync()
                .then(this.overlay.openAsync)
                .then(this.appendGalleryToBodyAsync)
                .then(this.showAsync);
        }
        setTimeout(openAsyncFn, 100);
    }

    appendGalleryToBodyAsync = () => this.appendToBodyAsync({ nativeElement: this.nativeElement });


    initializeAsync = () => {
        var deferred = this.$q.defer();
        this.$scope = this.$rootScope.$new();
        this.compileAsync().then(() => {
            this.nativeElement = this.augmentedJQuery[0];
            this.extendCssAsync({
                nativeHTMLElement: this.nativeElement,
                cssObject: {
                    "opacity": "0",
                    "margin": "0px",
                    "position": "absolute",
                    "top": "0",
                    "left":"0",
                    "background-color": "#FFF",
                    "display": "block",
                    "z-index": "999",
                    "width": "100%",
                    "height": "100%",
                    "padding": "0px",
                    "transition": "all 0.5s",
                    "-webkit-transition": "all 0.5s",
                    "-o-transition": "all 0.5s"
                }
            }).then(function () {
                deferred.resolve();
            });

        });
        return deferred.promise;
    }

    compileAsync = () => {
        var deferred = this.$q.defer();
        this.augmentedJQuery = this.$compile(angular.element(this.html))(this.$scope);
        setTimeout(() => {
            this.$scope.$digest()
            deferred.resolve();
        }, 100);
        return deferred.promise;
    }

    showAsync = () => this.extendCssAsync({
        nativeHTMLElement: this.nativeElement,
        cssObject: {
            "opacity": "1",
        }
    });

    get html() { return "<gallery></gallery>"; }
    $scope;
    augmentedJQuery;
    nativeElement;
    isOpen: boolean = false;
} 