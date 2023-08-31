import { welcEl } from "./welcome";
import { instEl } from "./instructions";
import { gameEl } from "./game";
import { paper } from "./hands/paper";

export function ultraRouter(container) {
  function divWelc() {
    const divWelcEl = document.createElement("div");
    divWelcEl.innerHTML = `<welc-el></welc-el>`;
    container.appendChild(divWelcEl)
  }
  function divInst() {
    const divInst = document.createElement("div");
    divInst.innerHTML = `<inst-el></inst-el>`;
    container.appendChild(divInst)
  }
  function divGame() {
    const divGame = document.createElement("div");
    divGame.innerHTML = `<game-el></game-el>`;
    container.appendChild(divGame)
  }
  function divPaper() {
    const divPaper = document.createElement("div");
    divPaper.innerHTML = `<paper-el></paper-el>`;
    container.appendChild(divPaper)
  }
  const routes = [
    {
      path: /\/welcome/,
      action: welcEl,
      tag: divWelc,
    },
    {
      path: /\/instructions/,
      action: instEl,
      tag: divInst,
    },
    {
      path: /\/game/,
      action: gameEl,
      tag: divGame,
    },
    {
      path: /\/paper/,
      action: paper,
      tag: divPaper,
    },
  ];
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }
  function handleRoute(route) {
    function remover() {
      if (container.firstChild) {
        container.firstChild.remove();
      }
    }
    function func() {
      for (const r of routes) {

        if (r.path.test(route)) {
          r.tag();
          const el = r.action({ goTo: goTo });
          return el
        }
      }
    }
    remover();
    func();
  }
  handleRoute(location.pathname);
  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
  if (location.pathname == "/") {
    goTo("/welcome")
  } else {
    goTo(location.pathname)
  }
}
