
import * as services from "./services";

var app = (<any>angular.module("services", [
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
]));

app.service("authorService", ["$q", "apiEndpoint", "fetch", services.AuthorService]);
app.service("brandService", ["$q", "apiEndpoint", "fetch", services.BrandService]);
app.service("galleryService", ["$q", "apiEndpoint", "fetch", services.GalleryService]);
app.service("photoService", ["$q", "apiEndpoint", "fetch", services.PhotoService]);
app.service("searchService", ["$q", "apiEndpoint", "fetch", services.SearchService]);
app.service("tagService", ["$q", "apiEndpoint", "fetch", services.TagService]);
app.service("userService", ["$q", "apiEndpoint", "fetch", "formEncode", services.UserService]);