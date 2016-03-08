import { fetch } from "../utilities";

export class GalleryService {

    constructor(private $http: angular.IHttpService, private $q: angular.IQService, private fetch: fetch) {

    }

    getBySlug = options => {
        let deferred = this.$q.defer();
        this.fetch.fromService({ method: "GET", url: this.baseUri + "/getBySlug", params: { slug: options.slug } })
            .then((results:any) => deferred.resolve(results.data));
        return deferred.promise;
    }

    get baseUri() { return "/gallery"; }
} 