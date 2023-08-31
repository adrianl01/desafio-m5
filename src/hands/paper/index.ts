function paper(params) {
    customElements.define(
        "paper-el",
        class Game extends HTMLElement {
            constructor() {
                super();
                this.render();
            }
            render() {
                const shadow = this.attachShadow({ mode: "open" });
                const stonePicURL = require("url:../../piedra.svg");
                const paperPicURL = require("url:../../papel.svg");
                const scissorsPicURL = require("url:../../tijera.svg");
                const backgroundURL = require("url:../../fondo.png");
                const div = document.createElement("div");
                div.innerHTML = `
                <div class="hands">
                <div class="rival-hand"></div>
                <div class="player-hand"><img src=${paperPicURL} class="paper"></div>
                </div>                
            `;
                const style = document.createElement("style");
                style.textContent = `
        .inner-root {                
              background-image: url(${backgroundURL});
              min-width: 375px;
              min-height: 667px;
              display: flex;
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
        .hands{
            min-width: 375px;
            min-height: 667px;
            display: flex;
            flex-direction: column;
            justify-content:space-between;
            align-items: center;
            }
        .rival-hand {
            display: flex;
            align-items: center;
            justify-content: center;          
            min-width: 375px;           
            }
        .rival__hand-img {
            width: 180px;
            height: 280px;
            text-align: center;
            transform: rotate(180deg);
        }
        .player-hand {
            display: flex;
            align-items: center;
            justify-content: center;
            padding-left:27px;
            min-width: 375px;
        }
        .paper {       
            text-align: center;    
            width: 180px;
            height: 280px;
            }        
          `;
                div.classList.add("inner-root");
                shadow.appendChild(div);
                shadow.appendChild(style);
                function randomNum() {
                    const num = Math.random().toString().slice(5, 6);
                    console.log("tester" + num)
                    handSelector(num)
                }
                function handSelector(number: string) {
                    const jsonNumber = JSON.parse(number)
                    console.log(jsonNumber)
                    var rivalHand = shadow.querySelector(".rival-hand") as HTMLElement;
                    function divStone() {
                        const div = document.createElement("div");
                        div.innerHTML = `<img src=${stonePicURL} class="rival__hand-img">`
                        rivalHand.appendChild(div);
                        return rivalHand;
                    }
                    function divPaper() {
                        const div = document.createElement("div");
                        div.innerHTML = `<img src=${paperPicURL} class="rival__hand-img">`
                        rivalHand.appendChild(div);
                        return rivalHand;
                    }
                    function divScissors() {
                        const div = document.createElement("div");
                        div.innerHTML = `<img src=${scissorsPicURL} class="rival__hand-img">`
                        rivalHand.appendChild(div);
                        return rivalHand;
                    }
                    const nums = [
                        {
                            number: 0,
                            action: divStone,
                        },
                        {
                            number: 1,
                            action: divPaper,
                        },
                        {
                            number: 2,
                            action: divScissors,
                        },
                        {
                            number: 3,
                            action: divStone,
                        },
                        {
                            number: 4,
                            action: divPaper,
                        },
                        {
                            number: 5,
                            action: divScissors,
                        },
                        {
                            number: 6,
                            action: divStone,
                        },
                        {
                            number: 7,
                            action: divPaper,
                        },
                        {
                            number: 8,
                            action: divScissors,
                        },
                        {
                            number: 9,
                            action: divStone,
                        },
                    ] as any
                    for (const n of nums) {
                        if (n.number == jsonNumber) {
                            console.log(jsonNumber);
                            const a = n.action();
                            return a
                        }
                    }
                }
                randomNum();
                return shadow;
            }
        }
    );
};
export { paper };
