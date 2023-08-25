import { welcEl } from "./welcome";
import { instEl } from "./instructions";

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
  ];

  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }
  // ---------------------------------------------
  function handleRoute(route) {

    function remover() {
      if (container.firstChild) {
        const els = container.firstChild.remove();
        console.log("se elimina", els);
      }
    }
    function func() {
      for (const r of routes) {
        console.log("r", r);
        console.log("ruta", route);
        if (r.path.test(route)) {
          console.log(r.tag);
          r.tag();
          const el = r.action({ goTo: goTo });
          console.log(el);
          return el
        }
      }
    }
    remover();
    func();
  }


  console.log("antes del handleRoute", location.pathname);
  handleRoute(location.pathname);

  window.onpopstate = function () {
    handleRoute(location.pathname);
  };

}
