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
        const div = document.createElement("div");
        div.innerHTML = `
                <div class="main-counter">
                <div class="circular-counter">
                <div class="circular-counter-2">
                <span class="number"></span>
                </div>
                </div>
                </div>
            <div class="hands">
            <button class="hands__button-stone"><div class="stone"><img src=${stonePicURL} class="img"></div></button>
            <button class="hands__button-paper"><div class="paper"><img src=${paperPicURL} class="img"></div></button>
            <button class="hands__button-scissors"><div class="scissors"><img src=${scissorsPicURL} class="img"></div></button>
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
          .main-counter{
            padding-top:125px;
          }
          .circular-counter {                 
            display:flex;            
            align-items: center;
            justify-content: center;      
            width: 243px;
            height: 243px;                  
            align-items: center;
            border-radius:50%;
            background: conic-gradient(blue 3.6deg, red 0deg)            
          }
          .circular-counter-2{     
            display:flex;
            align-items: center;
            justify-content: center;     
            text-align: center;   
            width:223px;
            height: 223px;
            border-radius:50%;
            background-color: white;
            background-image: url(${backgroundURL});
          }
          .number{
            display: flex;
            align-items: center;
            justify-content: center;
              width: 100px;
              height: 100px;
              font-family: 'Odibee Sans';
            font-size:70px;
            font-weight:600;
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
          .hands__button-stone, 
          .hands__button-paper,
          .hands__button-scissors {
            border:none;
          }
          .stone:active {
            width: 100px;
            height: 150px;            
          }          
          .paper:active {
            width: 100px;
            height: 150px;            
          }          
          .scissors:active {
            width: 100px;
            height: 150px;           
          }          
          `;
        div.classList.add("inner-root");
        shadow.appendChild(div);
        shadow.appendChild(style);
        const circularProgress = shadow?.querySelector(".circular-counter") as any;
        const progressValue = shadow?.querySelector(".number") as any;
        let progressStartValue = 4,
          progressEndValue = 0,
          speed = 1000;
        let progress = setInterval(() => {
          progressStartValue--;
          if (progressStartValue == progressEndValue) {
            clearInterval(progress)
          }
          progressValue.textContent = `${progressStartValue}`
          circularProgress.style.background = `conic-gradient(blue ${progressStartValue * 90}deg, red 0deg) `
        }, speed)

        const stoneButton = shadow.querySelector(".hands__button-stone");
        stoneButton?.addEventListener("click", (e) => {
          params.goTo("/stone")
        })
        const paperButton = shadow.querySelector(".hands__button-paper");
        paperButton?.addEventListener("click", (e) => {
          params.goTo("/paper")
        })
        const scissorsButton = shadow.querySelector(".hands__button-scissors");
        scissorsButton?.addEventListener("click", (e) => {
          params.goTo("/scissors")
        })
        return shadow;
      }
    }
  );
};
export { gameEl };
