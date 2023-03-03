var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var VectorMethods = (function () {
    function VectorMethods() {
    }
    VectorMethods.add = function (v1, v2) {
        return typeof v2 === "object"
            ? new Vector(v1.x + v2.x, v1.y + v2.y)
            : new Vector(v1.x + v2, v1.y + v2);
    };
    VectorMethods.substract = function (v1, v2) {
        return typeof v2 === "object"
            ? new Vector(v1.x - v2.x, v1.y - v2.y)
            : new Vector(v1.x - v2, v1.y - v2);
    };
    VectorMethods.multiply = function (v1, v2) {
        return typeof v2 === "object"
            ? new Vector(v1.x * v2.x, v1.y * v2.y)
            : new Vector(v1.x * v2, v1.y * v2);
    };
    VectorMethods.divide = function (v1, v2) {
        return typeof v2 === "object"
            ? new Vector(v1.x / v2.x, v1.y / v2.y)
            : new Vector(v1.x / v2, v1.y / v2);
    };
    VectorMethods.angleRadBetween = function (v1, v2) {
        var dot = v1.dot(v2);
        var mV1 = v1.magnitude;
        var mV2 = v2.magnitude;
        var a = dot / (mV1 * mV2);
        return Math.acos(a);
    };
    VectorMethods.angleDegBetween = function (v1, v2) {
        return (Vector.angleRadBetween(v1, v2) * 180) / Math.PI;
    };
    VectorMethods.dot = function (v1, v2) {
        return v1.x * v2.x + v1.y * v2.y;
    };
    VectorMethods.cross = function (v1, v2) {
        return {
            x: 0,
            y: 0,
            z: v1.x * v2.y - v1.y * v2.x,
        };
    };
    VectorMethods.min = function (v1, v2) {
        return typeof v2 === "object"
            ? new Vector(Math.min(v1.x, v2.x), Math.min(v1.y, v2.y))
            : new Vector(Math.min(v1.x, v2), Math.min(v1.y, v2));
    };
    VectorMethods.max = function (v1, v2) {
        return typeof v2 === "object"
            ? new Vector(Math.max(v1.x, v2.x), Math.max(v1.y, v2.y))
            : new Vector(Math.max(v1.x, v2), Math.max(v1.y, v2));
    };
    VectorMethods.minAndMax = function (v1, v2) {
        return [Vector.min(v1, v2), Vector.max(v1, v2)];
    };
    VectorMethods.eq = function (v1, v2) {
        return typeof v2 === "object"
            ? v1.x === v2.x && v1.y === v2.y
            : v1.x === v2 && v1.y === v2;
    };
    return VectorMethods;
}());
var Vector = (function (_super) {
    __extends(Vector, _super);
    function Vector(_x, _y) {
        var _this = _super.call(this) || this;
        _this._x = _x;
        _this._y = _y;
        return _this;
    }
    Object.defineProperty(Vector.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "abs", {
        get: function () {
            return new Vector(Math.abs(this.x), Math.abs(this.y));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "length", {
        get: function () {
            return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "magnitude", {
        get: function () {
            return this.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "normalized", {
        get: function () {
            var length = this.length;
            return new Vector(this.x / length, this.y / length);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "rounded", {
        get: function () {
            return new Vector(Math.round(this.x), Math.round(this.y));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "floored", {
        get: function () {
            return new Vector(Math.floor(this.x), Math.floor(this.y));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "ceiled", {
        get: function () {
            return new Vector(Math.ceil(this.x), Math.ceil(this.y));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "flipped", {
        get: function () {
            return new Vector(this._y, this._x);
        },
        enumerable: false,
        configurable: true
    });
    Vector.prototype.add = function (v2) {
        return Vector.add(this, v2);
    };
    Vector.prototype.substract = function (v2) {
        return Vector.substract(this, v2);
    };
    Vector.prototype.multiply = function (v2) {
        return Vector.multiply(this, v2);
    };
    Vector.prototype.divide = function (v2) {
        return Vector.divide(this, v2);
    };
    Vector.prototype.dot = function (v2) {
        return Vector.dot(this, v2);
    };
    Vector.prototype.cross = function (v2) {
        return Vector.cross(this, v2);
    };
    Vector.prototype.eq = function (v2) {
        return Vector.eq(this, v2);
    };
    return Vector;
}(VectorMethods));
export default Vector;
