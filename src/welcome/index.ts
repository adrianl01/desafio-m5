export function welcEl(params) {
  customElements.define(
    "welc-el",
    class Welcome extends HTMLElement {
      constructor() {
        super();
        this.render();
      }
      // connectedCallback() {
      //   const boton = document.querySelector(".button") as HTMLButtonElement;
      //   document.body.addEventListener("click", function (e) {
      //     e.preventDefault();
      //     params.goTo("/instructions");

      //     console.log("exitButton was clicked!");
      //   });
      // }
      render() {
        const shadow = this.attachShadow({ mode: "open" });
        const stonePicURL = require("url:../piedra.svg");
        const paperPicURL = require("url:../papel.svg");
        const scissorsPicURL = require("url:../tijera.svg");
        const backgroundURL = require("url:../fondo.png");
        // -----------------------------------------------------
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
        // -------------------------------------------------------
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
        div.classList.add("inner-root");
        shadow.appendChild(div);
        shadow.appendChild(style);
        const boton = shadow.querySelector(".welcome-button");
        boton?.addEventListener("click", function () {
          params.goTo("/instructions");
          console.log("pasamos a la siguiente página para instrucciones");
        });
        return shadow;
      }
    }
  );
}

