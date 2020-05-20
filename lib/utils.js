"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
var Utils;
(function (Utils) {
    function toBinary(value, index, next) {
        let str = stringify(value, index, next);
        const binaryMask = /^(binary|X)\'([0-9a-fA-F]*)\'/;
        if (binaryMask.test(str)) {
            return Buffer.from(str.match(binaryMask)[2], "hex");
        }
        else {
            return Buffer.from(str, "base64");
        }
    }
    Utils.toBinary = toBinary;
    function stringify(value, index, next) {
        return Array.prototype.map.call(value.slice(index, next), function (ch) { return String.fromCharCode(ch); }).join("");
    }
    Utils.stringify = stringify;
    function is(value, compare) {
        for (let i = 0; i < compare.length; i++) {
            if (value === compare.charCodeAt(i))
                return true;
        }
        return false;
    }
    Utils.is = is;
    function equals(value, index, compare) {
        let i = 0;
        while (value[index + i] === compare.charCodeAt(i) && i < compare.length) {
            i++;
        }
        return i === compare.length ? i : 0;
    }
    Utils.equals = equals;
    function required(value, index, comparer, min, max) {
        let i = 0;
        max = max || (value.length - index);
        while (i < max && comparer(value[index + i])) {
            i++;
        }
        return i >= (min || 0) && i <= max ? index + i : 0;
    }
    Utils.required = required;
})(Utils = exports.Utils || (exports.Utils = {}));
exports.default = Utils;
//# sourceMappingURL=utils.js.map