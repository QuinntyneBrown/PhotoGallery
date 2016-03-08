exports.removeElement = function (options) {
    if (options.nativeHTMLElement) {
        var $target = angular.element(options.nativeHTMLElement);
        options.nativeHTMLElement.parentNode.removeChild(options.nativeHTMLElement);
        $target.remove();
        delete options.nativeHTMLElement;
    }
};
//# sourceMappingURL=remove-element.js.map