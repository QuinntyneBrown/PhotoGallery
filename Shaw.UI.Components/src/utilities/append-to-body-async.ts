import { $q } from "./$q";

export var appendToBodyAsync: any = (options: any) => {
    var deferred = $q.defer();
    document.body.appendChild(options.nativeElement);
    setTimeout(() => { deferred.resolve(); }, options.wait || 100);
    return deferred.promise;
} 