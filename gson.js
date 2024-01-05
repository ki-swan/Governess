"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gson = void 0;
var gson = /** @class */ (function () {
    function gson() {
        this.pairs = [];
    }
    gson.prototype.add = function (aKey, aValue) {
        this.pairs.push({ key: aKey, value: aValue });
        return this;
    };
    gson.prototype.read = function () {
        for (var index = 0; index < this.pairs.length; index++) {
            var element = this.pairs[index];
            console.log(element);
        }
    };
    gson.prototype.getByKey = function (aKey) {
        for (var index = 0; index < this.pairs.length; index++) {
            var element = this.pairs[index];
            if (element.key == aKey)
                return element;
        }
        return;
    };
    gson.prototype.count = function () {
        return this.pairs.length;
    };
    gson.prototype.getByIndex = function (aIndex) {
        return this.pairs[aIndex];
    };
    return gson;
}());
exports.gson = gson;
//# sourceMappingURL=gson.js.map