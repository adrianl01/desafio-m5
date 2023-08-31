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
            text-align: center;
            width: 100px;
            height: 155px;
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
                return shadow;
            }
        }
    );
};
export { paper };
