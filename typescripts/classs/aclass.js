var Car = (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.drive = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(("A car runs " + distanceInMeters + "m powered by ") + this.engine);
    };
    return Car;
}());
var car = new Car("petrol");
car.drive(100);
//# sourceMappingURL=aclass.js.map