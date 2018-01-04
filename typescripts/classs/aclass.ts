class Car{
    private engine: string;
    constructor(engine: string) {
        this.engine = engine;
    }
    drive(distanceInMeters: number=0) {
        console.log(`A car runs ${distanceInMeters}m powered by ` + this.engine);
    }
}

let car = new Car("petrol");
car.drive(100);