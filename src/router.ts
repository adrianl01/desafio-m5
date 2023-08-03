import { welcEl } from "./welcome";
import { instEl } from "./instructions";

// const welcomeTag = document.querySelector(".root")

// welcomeTag?. = `
// `

// const tags = [

// ]

const routes = [
  {
    path: /\//,
    action: welcEl,
  },
  {
    path: /\/instructions/,
    action: instEl,
  },
];
export function ultraRouter(container) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }
  // ---------------------------------------------
  // function handleRoute(route) {
  //   const divWelc = document.createElement("div");
  //   divWelc.innerHTML = `<welc-el></welc-el>`;

  //   const divInst = document.createElement("div");
  //   divInst.innerHTML = `<inst-el></inst-el>`;

  // function remover() {
  //   const main = document.querySelector(".main");
  //   if (container.firstChild) {
  //     const els = container.firstChild.remove();
  //     console.log("se elimina", els);
  //   }
  // }
  // function func() {
  //   for (const r of routes) {
  //     console.log("r", r);
  //     console.log("ruta", route);
  //     if (r.path.test(route)) {
  //       console.log(r.tag);
  //       r.tag;
  //       const el = r.action({ goTo: goTo });
  //     }
  //   }
  // }
  // remover();
  // func();
  // }
  function handleRoute(route) {
    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.action({ goTo: goTo });
        console.log(r);
        if (container.firstChild) {
          container.firstChild.remove();
        }
        console.log(el);
        container.appendChild(el);
      }
    }
  }

  // if ((location.pathname = "/")) {
  //   goTo("/welcome");
  // }
  console.log("antes del handleRoute", location.pathname);
  handleRoute(location.pathname);

  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
