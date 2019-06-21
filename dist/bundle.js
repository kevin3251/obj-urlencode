(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global['obj-urlencode'] = {}));
}(this, function (exports) { 'use strict';

    function encode(obj) {
        if (typeof obj !== 'object') return encodeURIComponent(obj)

        if (Array.isArray(obj)) {
            return obj.map(item => encode(item))
        }

        let result = {};
        Object.entries(obj).forEach(([key, value]) => {
            result[key] = encode(value);
        });
        return result 
    }

    function decode(obj) {
        if (typeof obj !== 'object') return decodeURIComponent(obj)

        if (Array.isArray(obj)) {
            return obj.map(item => decode(item))
        }
        
        let result = {};
        Object.entries(obj).forEach(([key, value]) => {
            result[key] = decode(value);
        });
        return result
    }

    var main = { encode, decode };

    exports.decode = decode;
    exports.default = main;
    exports.encode = encode;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
