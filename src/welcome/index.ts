export function welcEl(params) {
  const customEl = customElements.define(
    "welc-el",
    class Welcome extends HTMLElement {
      constructor() {
        super();
        this.render();
      }

      connectedCallback() {
        const boton = document.querySelector(".button") as HTMLButtonElement;
        document.body.addEventListener("click", function (e) {
          e.preventDefault();
          params.goTo("/instructions");

          console.log("exitButton was clicked!");
        });
      }

      render() {
        const shadow = this.attachShadow({ mode: "open" });
        const stonePicURL = require("url:../piedra.svg");
        const paperPicURL = require("url:../papel.svg");
        const scissorsPicURL = require("url:../tijera.svg");
        const backgroundURL = require("url:../fondo.png");

        // -----------------------------------------------------

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
          text-align: center;
          margin-top: 70px;
          color: #009048;
          font-family: 'Courier Prime', monospace;
          font-size: 70px;
          font-style: normal;
          font-weight: 1000;
        }
      
      .welcome-button {
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

        // ----------------------------------------------------------

        const div = document.createElement("div");
        div.innerHTML = `
      <h1 class="title">Piedra Papel ó Tijera</h1>
      <button type="button" class="welcome-button">Empezar</button>
      <div class="hands">
          <img src=${stonePicURL} class="img">
          <img src=${paperPicURL} class="img">
          <img src=${scissorsPicURL} class="img">
      </div>
      `;

        // ----------------------------------------------------------

        div.classList.add("inner-root");

        const buttonEl = document.querySelector(".welcome-button");
        div.addEventListener("click", () => {
          params.goTo("/instructions");
          console.log("hice click");
        });
        shadow.appendChild(div);
        shadow.appendChild(style);
        const mainDiv = document.createElement("div");

        mainDiv.appendChild(shadow);

        console.log(mainDiv);
        return mainDiv;

        //   div.appendChild(style);

        // const boton = document.querySelector(".button") as HTMLButtonElement;
        // boton.addEventListener("click", function () {
        //   params.goTo("/instructions");
        //   console.log("exitButton was clicked!");
        // });
      }
    }
  );
  const ultraDiv = document.createElement("div");
  ultraDiv.innerHTML = `${customEl}`;
  return ultraDiv;
}
