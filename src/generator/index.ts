function numGenerator() {
    const stonePicURL = require("url:../piedra.svg");
    const paperPicURL = require("url:../papel.svg");
    const scissorsPicURL = require("url:../tijera.svg");

    function randomNum() {
        const num = Math.random().toString().slice(5, 6);
        const nums = [{
            firstValue: "1"
        },
        {
            secondValue: "2"
        }
        ]

        console.log("tester")


        handSelector(num)
    }
    function handSelector(number: string) {
        var rivalHand
        if (number == "0" || "3" || "6" || "9") {

            rivalHand.innerHTML = `<img src=${stonePicURL} class="">`
            return rivalHand;
        }
        if (number == "1" || "4" || "7") {

            rivalHand.innerHTML = `<img src=${paperPicURL} class="">`
            return rivalHand;
        }
        if (number == "2" || "5" || "8") {

            rivalHand.innerHTML = `<img src=${scissorsPicURL} class="">`
            return rivalHand;
        }
    }
    randomNum()
}

numGenerator()
