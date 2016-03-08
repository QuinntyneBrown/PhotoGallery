import { $q } from "./$q";

export var extendCssAsync = options => {
    return $q.when(angular.extend(options.nativeHTMLElement.style, options.cssObject));
}