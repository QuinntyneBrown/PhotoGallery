import { Overlay } from "./overlay";

export class PhotoGallery {
    constructor(private $routeParams: angular.route.IRouteParamsService, private overlay: Overlay) {}

    onRouteChangeSuccess = () => {

        if ((this.$routeParams as any).gallerySlug) { this.overlay.openAsync(); }

        if ((this.$routeParams as any).gallerySlug && (this.$routeParams as any).photoSlug && !this.isOpen) {

        }

    };

    isOpen: boolean = false;
} 