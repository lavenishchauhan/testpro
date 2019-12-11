var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(settype, name, username) {
        this.settype = settype;
        this.username = username;
        this.age = 22;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType('ggg');
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    Person.prototype.callFun = function () {
        console.log(this.name);
    };
    return Person;
}());
var Max = /** @class */ (function (_super) {
    __extends(Max, _super);
    function Max(username) {
        var _this = _super.call(this, 'url', 'Nik', username) || this;
        _this.username = username;
        _this.age = 31;
        return _this;
    }
    return Max;
}(Person));
console.log(Person.name);
//const person = new Person('Max','Molik');
//console.log(person);
var max = new Max('username');
console.log(max);
// Getters & Setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default1";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this.species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = 'AB';
console.log(plant.species);
// plant.species('jjj')
// console.log(plant);
// console.log('species', plant.species);
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    return Helpers;
}());
