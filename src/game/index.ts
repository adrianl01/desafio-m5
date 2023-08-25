function gameEl(params) {
    customElements.define(
        "game-el",
        class Game extends HTMLElement {
            constructor() {
                super();
                this.render();
            }


            render() {
                const shadow = this.attachShadow({ mode: "open" });
                const stonePicURL = require("url:../piedra.svg");
                const paperPicURL = require("url:../papel.svg");
                const scissorsPicURL = require("url:../tijera.svg");
                const backgroundURL = require("url:../fondo.png");

                const circularProgress = document.querySelector(".counter"),
                    progressValue = document.querySelector(".numbers");

                let progressStartValue = 0,
                    progressEndValue = 3,
                    speed = 3000;

                let progress = setInterval(() => {
                    progressStartValue++;
                    console.log(progressValue)

                    if (progressStartValue == progressEndValue) {
                        clearInterval(progress)
                    }
                }, speed)





                const div = document.createElement("div");
                div.innerHTML = `
            
            <div class="hands">
                <img src=${stonePicURL} class="img">
                <img src=${paperPicURL} class="img">
                <img src=${scissorsPicURL} class="img">
            </div>
            `;
                const style = document.createElement("style");
                style.textContent = `
            .inner-root {
              background-image: url(${backgroundURL});
              min-width: 375px;
              height: 667px;
              display: flex;
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
          }
          
          .title {
              color: #000;
              text-align: center;
              font-family: 'Courier Prime', monospace;
              font-size: 40px;
              font-style: normal;
              font-weight: 600;
              line-height: 100%; /* 40px */
          }
          
          .button {
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
          
          .hands {
              display: flex;
              gap: 46px;
          }
          
          .button:hover {
              background: #00449d;
          }
          
          .button:active {
              background: #009048;
          }
          `;

                div.classList.add("inner-root");
                //   div.appendChild(style);
                //   return div;

                shadow.appendChild(div);
                shadow.appendChild(style);

                // const mainDiv2 = document.createElement("div");
                // mainDiv2.appendChild(shadow);
                // console.log(mainDiv2);
                return shadow;
            }
        }
    );
};

export { gameEl };
