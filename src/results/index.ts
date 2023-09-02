function result(res) {
    customElements.define("results-el", class Results extends HTMLElement {

        constructor() {
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({ mode: "open" });
            const div = document.createElement("div");
            div.innerHTML = `                
                <div class="window__text">
                <div class="window__result">${resultsText()}</div>                
                <div class="points__rival">Máquina:</div>                
                <div class="points__player">Vos:</div>                
                </div>
                <button class="window__button">Reintentar</button>                      
                `
            const style = document.createElement("style");
            style.textContent = `
                .window {
                    backdrop-filter: blur(10px);
                    display: flex;
                    position: absolute;
                    color: black;
                    /* background-color: rgb(0, 0, 0); */
                    /* opacity: .4; */
                    top: 5%;
                    left: 5%;
                    right: 5%;
                    bottom: 5%;
                    text-align: center;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    font-family: 'Odibee Sans';
                    font-size:30px;
                    font-weight:600;
                    gap: 30px;
                    border: solid black
                }
                .window__button {
                    width: 322px;
                    height: 87px;
                    border-radius: 10px;
                    border: 10px solid #001997;
                    background: #006CFC;
                    color: aliceblue;
                
                    color: #D8FCFC;
                    text-align: center;
                    font-family: 'Odibee Sans';
                    font-size: 45px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    letter-spacing: 2.25px;
                }                                 
                `;
            div.classList.add("window");
            shadow.appendChild(div);
            shadow.appendChild(style);
            const pointsStone = [
                {
                    number: 1,
                    hand: "stone",
                    result: "draw"
                },
                {
                    number: 2,
                    hand: "paper",
                    result: "lose"
                },
                {
                    number: 3,
                    hand: "scissors",
                    result: "win"
                },
                {
                    number: 4,
                    hand: "stone",
                    result: "draw"
                },
                {
                    number: 5,
                    hand: "paper",
                    result: "lose"
                },
                {
                    number: 6,
                    hand: "scissors",
                    result: "win"
                },
                {
                    number: 7,
                    hand: "stone",
                    result: "draw",
                },
                {
                    number: 8,
                    hand: "paper",
                    result: "lose"
                },
                {
                    number: 9,
                    hand: "scissors",
                    result: "win"
                },
                {
                    number: 10,
                    hand: "stone",
                    result: "draw"
                },
            ]
            const pointsPaper = [
                {
                    number: 2,
                    hand: "stone",
                    result: "win"
                },
                {
                    number: 3,
                    hand: "paper",
                    result: "draw"
                },
                {
                    number: 4,
                    hand: "scissors",
                    result: "lose"
                },
                {
                    number: 5,
                    hand: "stone",
                    result: "win"
                },
                {
                    number: 6,
                    hand: "paper",
                    result: "draw"
                },
                {
                    number: 7,
                    hand: "scissors",
                    result: "lose"
                },
                {
                    number: 8,
                    hand: "stone",
                    result: "win"
                },
                {
                    number: 9,
                    hand: "paper",
                    result: "draw"
                },
                {
                    number: 10,
                    hand: "scissors",
                    result: "lose"
                },
                {
                    number: 11,
                    hand: "stone",
                    result: "win"
                },
            ]
            const pointsScissors = [
                {
                    number: 3,
                    hand: "stone",
                    result: "lose"
                },
                {
                    number: 4,
                    hand: "paper",
                    result: "win"
                },
                {
                    number: 5,
                    hand: "scissors",
                    result: "draw"
                },
                {
                    number: 6,
                    hand: "stone",
                    result: "lose"
                },
                {
                    number: 7,
                    hand: "paper",
                    result: "win"
                },
                {
                    number: 8,
                    hand: "scissors",
                    result: "draw"
                },
                {
                    number: 9,
                    hand: "stone",
                    result: "lose"
                },
                {
                    number: 10,
                    hand: "paper",
                    result: "win"
                },
                {
                    number: 11,
                    hand: "scissors",
                    result: "draw"
                },
                {
                    number: 12,
                    hand: "stone",
                    result: "lose"
                },
            ]
            const hand = res.toString().slice(0, 1);
            const rivalHand = res.toString().slice(1);
            const hands = hand + rivalHand
            console.log("desde los resultados", hands)
            function resultsText() {
                if (hand == 1) {
                    for (const result of pointsStone) {
                        if (result.number == hands) {
                            if (result.result == "win") {
                                const winText = "Ganaste!😃"
                                return winText
                            }
                            if (result.result == "lose") {
                                const loseText = "Perdiste🙃"
                                return loseText
                            }
                            if (result.result == "win") {
                                const drawText = "Empate😁"
                                return drawText
                            }
                        }
                    }
                }
                if (hand == 2) {
                    for (const result of pointsPaper) {
                        if (result.number == hands) {
                            if (result.result == "win") {
                                const winText = "Ganaste!😃"
                                return winText
                            }
                            if (result.result == "lose") {
                                const loseText = "Perdiste🙃"
                                return loseText
                            }
                            if (result.result == "win") {
                                const drawText = "Empate😁"
                                return drawText
                            }
                        }
                    }
                }
                if (hand == 3) {
                    for (const result of pointsScissors) {
                        if (result.number == hands) {
                            if (result.result == "win") {
                                const winText = "Ganaste!😃"
                                return winText
                            }
                            if (result.result == "lose") {
                                const loseText = "Perdiste🙃"
                                return loseText
                            }
                            if (result.result == "win") {
                                const drawText = "Empate😁"
                                return drawText
                            }
                        }
                    }
                }
            }
            return shadow
        }
    });
};
export { result }