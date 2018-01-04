let gift = {
    gifts: ["teddy bear", "spiderman", "dinosaur", "Thomas loco", "toy bricks", "Transformers"],
    giftPicker: function() {
        return () => {
            let pickedNumber = Math.floor(Math.random() * 6);
            return this.gifts[pickedNumber];
        }
    }
};

let pickGift = gift.giftPicker();
console.log("you get a: ", pickGift());