var gift = {
    gifts: ["teddy bear", "spiderman", "dinosaur", "Thomas loco", "toy bricks", "Transformers"],
    giftPicker: function () {
        var _this = this;
        return function () {
            var pickedNumber = Math.floor(Math.random() * 6);
            return _this.gifts[pickedNumber];
        };
    }
};
var pickGift = gift.giftPicker();
console.log("you get a: ", pickGift());
//# sourceMappingURL=arrayfunction.js.map