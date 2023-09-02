// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2oZg2":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"h7u1C":[function(require,module,exports) {
var _router = require("./router");
(function() {
    const rootEl = document.querySelector(".main");
    (0, _router.ultraRouter)(rootEl);
})();

},{"./router":"4QFWt"}],"4QFWt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ultraRouter", ()=>ultraRouter);
var _welcome = require("./welcome");
var _instructions = require("./instructions");
var _game = require("./game");
var _paper = require("./hands/paper");
var _scissors = require("./hands/scissors");
var _stone = require("./hands/stone");
function ultraRouter(container) {
    function divWelc() {
        const divWelcEl = document.createElement("div");
        divWelcEl.innerHTML = `<welc-el></welc-el>`;
        container.appendChild(divWelcEl);
    }
    function divInst() {
        const divInst = document.createElement("div");
        divInst.innerHTML = `<inst-el></inst-el>`;
        container.appendChild(divInst);
    }
    function divGame() {
        const divGame = document.createElement("div");
        divGame.innerHTML = `<game-el></game-el>`;
        container.appendChild(divGame);
    }
    function divPaper() {
        const divPaper = document.createElement("div");
        divPaper.innerHTML = `<paper-el></paper-el>`;
        container.appendChild(divPaper);
    }
    function divScissors() {
        const divScissors = document.createElement("div");
        divScissors.innerHTML = `<scissors-el></scissors-el>`;
        container.appendChild(divScissors);
    }
    function divStone() {
        const divStone = document.createElement("div");
        divStone.innerHTML = `<stone-el></stone-el>`;
        container.appendChild(divStone);
    }
    const routes = [
        {
            path: /\/welcome/,
            action: (0, _welcome.welcEl),
            tag: divWelc
        },
        {
            path: /\/instructions/,
            action: (0, _instructions.instEl),
            tag: divInst
        },
        {
            path: /\/game/,
            action: (0, _game.gameEl),
            tag: divGame
        },
        {
            path: /\/paper/,
            action: (0, _paper.paper),
            tag: divPaper
        },
        {
            path: /\/scissors/,
            action: (0, _scissors.scissors),
            tag: divScissors
        },
        {
            path: /\/stone/,
            action: (0, _stone.stone),
            tag: divStone
        }
    ];
    function goTo(path) {
        history.pushState({}, "", path);
        handleRoute(path);
    }
    function handleRoute(route) {
        function remover() {
            if (container.firstChild) container.firstChild.remove();
        }
        function func() {
            for (const r of routes)if (r.path.test(route)) {
                r.tag();
                const el = r.action({
                    goTo: goTo
                });
                return el;
            }
        }
        remover();
        func();
    }
    handleRoute(location.pathname);
    window.onpopstate = function() {
        handleRoute(location.pathname);
    };
    if (location.pathname == "/") goTo("/welcome");
    else goTo(location.pathname);
}

},{"./welcome":"4ZHqi","./instructions":"j7w79","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./game":"hAGHe","./hands/paper":"5o8zy","./hands/scissors":"gjnzS","./hands/stone":"1cQwl"}],"4ZHqi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "welcEl", ()=>welcEl);
function welcEl(params) {
    customElements.define("welc-el", class Welcome extends HTMLElement {
        constructor(){
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
            const shadow = this.attachShadow({
                mode: "open"
            });
            const stonePicURL = require("cb8c1c6d298f2a46");
            const paperPicURL = require("eb6ac780c41acfc8");
            const scissorsPicURL = require("d017b3f9e3a35c5d");
            const backgroundURL = require("2ea421fe71755ece");
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
            boton?.addEventListener("click", function() {
                params.goTo("/instructions");
                console.log("pasamos a la siguiente p\xe1gina para instrucciones");
            });
            return shadow;
        }
    });
}

},{"cb8c1c6d298f2a46":"9F5qN","eb6ac780c41acfc8":"aFQpL","d017b3f9e3a35c5d":"6oFW3","2ea421fe71755ece":"iEwyR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9F5qN":[function(require,module,exports) {
module.exports = require("428627e8479bbd8f").getBundleURL("7UhFu") + "piedra.3ed8bb08.svg" + "?" + Date.now();

},{"428627e8479bbd8f":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"aFQpL":[function(require,module,exports) {
module.exports = require("dc18700e4932751d").getBundleURL("7UhFu") + "papel.dbcb3e49.svg" + "?" + Date.now();

},{"dc18700e4932751d":"lgJ39"}],"6oFW3":[function(require,module,exports) {
module.exports = require("2ea4cee603cafabc").getBundleURL("7UhFu") + "tijera.2daca733.svg" + "?" + Date.now();

},{"2ea4cee603cafabc":"lgJ39"}],"iEwyR":[function(require,module,exports) {
module.exports = require("964cda3696c03287").getBundleURL("7UhFu") + "fondo.88dcee48.png" + "?" + Date.now();

},{"964cda3696c03287":"lgJ39"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"j7w79":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "instEl", ()=>instEl);
function instEl(params) {
    customElements.define("inst-el", class Welcome extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({
                mode: "open"
            });
            const stonePicURL = require("80459f7bc17693c");
            const paperPicURL = require("e69c38e5c0d10819");
            const scissorsPicURL = require("9dde2afb4b3bb0dc");
            const backgroundURL = require("3af4f9e03806575e");
            const div = document.createElement("div");
            div.innerHTML = `
          <h3 class="title">Presioná Jugar y elegí piedra, papel o tijera antes de que pasen los 3 segundos</h3>
          <button class="button">¡Jugar!</button>
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
            shadow.appendChild(div);
            shadow.appendChild(style);
            const boton = shadow.querySelector(".button");
            boton.addEventListener("click", function(e) {
                e.preventDefault();
                params.goTo("/game");
                console.log("pasamos a la siguiente p\xe1gina para jugar");
            });
            return shadow;
        }
    });
}

},{"80459f7bc17693c":"9F5qN","e69c38e5c0d10819":"aFQpL","9dde2afb4b3bb0dc":"6oFW3","3af4f9e03806575e":"iEwyR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hAGHe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gameEl", ()=>gameEl);
function gameEl(params) {
    customElements.define("game-el", class Game extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({
                mode: "open"
            });
            const stonePicURL = require("2d7e3701892f4666");
            const paperPicURL = require("974e556cacd2055e");
            const scissorsPicURL = require("2be2d28cc2b236ca");
            const backgroundURL = require("1a95481d2a2981aa");
            const div = document.createElement("div");
            div.innerHTML = `
        <div class="window">
                <div class="window__text">Se te acabó el tiempo😨</div>
                <button class="window__button">Reintentar</button>
                </div>
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
        .window {
          backdrop-filter: blur(10px);
          display: none;
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
          .button,.window__button {
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
            const circularProgress = shadow?.querySelector(".circular-counter");
            const progressValue = shadow?.querySelector(".number");
            let progressStartValue = 4, progressEndValue = 0, speed = 1000;
            let progress = setInterval(()=>{
                progressStartValue--;
                if (progressStartValue == progressEndValue) {
                    const windowEl = shadow.querySelector(".window");
                    windowEl.style.display = "flex";
                    clearInterval(progress);
                }
                progressValue.textContent = `${progressStartValue}`;
                circularProgress.style.background = `conic-gradient(blue ${progressStartValue * 90}deg, red 0deg) `;
            }, speed);
            const stoneButton = shadow.querySelector(".hands__button-stone");
            stoneButton?.addEventListener("click", (e)=>{
                params.goTo("/stone");
            });
            const paperButton = shadow.querySelector(".hands__button-paper");
            paperButton?.addEventListener("click", (e)=>{
                params.goTo("/paper");
            });
            const scissorsButton = shadow.querySelector(".hands__button-scissors");
            scissorsButton?.addEventListener("click", (e)=>{
                params.goTo("/scissors");
            });
            const windowButton = shadow.querySelector(".window__button");
            windowButton?.addEventListener("click", ()=>{
                params.goTo("/instructions");
            });
            return shadow;
        }
    });
}

},{"2d7e3701892f4666":"9F5qN","974e556cacd2055e":"aFQpL","2be2d28cc2b236ca":"6oFW3","1a95481d2a2981aa":"iEwyR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5o8zy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "paper", ()=>paper);
function paper(params) {
    customElements.define("paper-el", class Game extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({
                mode: "open"
            });
            const stonePicURL = require("f4dbb310b13c82f7");
            const paperPicURL = require("1f7c6c51e493e4b4");
            const scissorsPicURL = require("d878cf5fccf0dda6");
            const backgroundURL = require("1cf17cb2ee2d20c4");
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
                console.log("tester" + num);
                handSelector(num);
            }
            function handSelector(number) {
                const jsonNumber = JSON.parse(number);
                console.log(jsonNumber);
                var rivalHand = shadow.querySelector(".rival-hand");
                function divStone() {
                    const div = document.createElement("div");
                    div.innerHTML = `<img src=${stonePicURL} class="rival__hand-img">`;
                    rivalHand.appendChild(div);
                    return rivalHand;
                }
                function divPaper() {
                    const div = document.createElement("div");
                    div.innerHTML = `<img src=${paperPicURL} class="rival__hand-img">`;
                    rivalHand.appendChild(div);
                    return rivalHand;
                }
                function divScissors() {
                    const div = document.createElement("div");
                    div.innerHTML = `<img src=${scissorsPicURL} class="rival__hand-img">`;
                    rivalHand.appendChild(div);
                    return rivalHand;
                }
                const nums = [
                    {
                        number: 0,
                        action: divStone
                    },
                    {
                        number: 1,
                        action: divPaper
                    },
                    {
                        number: 2,
                        action: divScissors
                    },
                    {
                        number: 3,
                        action: divStone
                    },
                    {
                        number: 4,
                        action: divPaper
                    },
                    {
                        number: 5,
                        action: divScissors
                    },
                    {
                        number: 6,
                        action: divStone
                    },
                    {
                        number: 7,
                        action: divPaper
                    },
                    {
                        number: 8,
                        action: divScissors
                    },
                    {
                        number: 9,
                        action: divStone
                    }
                ];
                for (const n of nums)if (n.number == jsonNumber) {
                    console.log(jsonNumber);
                    const a = n.action();
                    return a;
                }
            }
            randomNum();
            return shadow;
        }
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","f4dbb310b13c82f7":"9F5qN","1f7c6c51e493e4b4":"aFQpL","d878cf5fccf0dda6":"6oFW3","1cf17cb2ee2d20c4":"iEwyR"}],"gjnzS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scissors", ()=>scissors);
function scissors(params) {
    customElements.define("scissors-el", class Game extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({
                mode: "open"
            });
            const stonePicURL = require("44480cc25fb41d58");
            const paperPicURL = require("5e3598db4388e552");
            const scissorsPicURL = require("9526604d1d7569a0");
            const backgroundURL = require("423e938cd879d8b7");
            const div = document.createElement("div");
            div.innerHTML = `
                <div class="hands">
                <div class="rival-hand"></div>
                <div class="player-hand"><img src=${scissorsPicURL} class="scissors"></div>
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
            min-width: 375px;
        }
        .scissors {       
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
                console.log("tester" + num);
                handSelector(num);
            }
            function handSelector(number) {
                const jsonNumber = JSON.parse(number);
                console.log(jsonNumber);
                var rivalHand = shadow.querySelector(".rival-hand");
                function divStone() {
                    const div = document.createElement("div");
                    div.innerHTML = `<img src=${stonePicURL} class="rival__hand-img">`;
                    rivalHand.appendChild(div);
                    return rivalHand;
                }
                function divPaper() {
                    const div = document.createElement("div");
                    div.innerHTML = `<img src=${paperPicURL} class="rival__hand-img">`;
                    rivalHand.appendChild(div);
                    return rivalHand;
                }
                function divScissors() {
                    const div = document.createElement("div");
                    div.innerHTML = `<img src=${scissorsPicURL} class="rival__hand-img">`;
                    rivalHand.appendChild(div);
                    return rivalHand;
                }
                const nums = [
                    {
                        number: 0,
                        action: divStone
                    },
                    {
                        number: 1,
                        action: divPaper
                    },
                    {
                        number: 2,
                        action: divScissors
                    },
                    {
                        number: 3,
                        action: divStone
                    },
                    {
                        number: 4,
                        action: divPaper
                    },
                    {
                        number: 5,
                        action: divScissors
                    },
                    {
                        number: 6,
                        action: divStone
                    },
                    {
                        number: 7,
                        action: divPaper
                    },
                    {
                        number: 8,
                        action: divScissors
                    },
                    {
                        number: 9,
                        action: divStone
                    }
                ];
                for (const n of nums)if (n.number == jsonNumber) {
                    console.log(jsonNumber);
                    const a = n.action();
                    return a;
                }
            }
            randomNum();
            return shadow;
        }
    });
}

},{"44480cc25fb41d58":"9F5qN","5e3598db4388e552":"aFQpL","9526604d1d7569a0":"6oFW3","423e938cd879d8b7":"iEwyR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1cQwl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stone", ()=>stone);
var _results = require("../../results");
function stone(params) {
    customElements.define("stone-el", class Game extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({
                mode: "open"
            });
            const stonePicURL = require("3331a4d257c870d6");
            const paperPicURL = require("14141431f6a62d5b");
            const scissorsPicURL = require("7002c57c863bc8d5");
            const backgroundURL = require("884d99c5cee166f7");
            const div = document.createElement("div");
            div.innerHTML = `                        
                <div class="hands">
                <div class="rival-hand"></div>
                <div class="player-hand"><img src=${stonePicURL} class="stone"></div>
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
            min-width: 375px;
        }
        .stone {       
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
                console.log("tester" + num);
                handSelector(num);
            }
            function handSelector(number) {
                const jsonNumber = JSON.parse(number);
                console.log(jsonNumber);
                var rivalHand = shadow.querySelector(".rival-hand");
                function divStone() {
                    const div = document.createElement("div");
                    div.innerHTML = `<img src=${stonePicURL} class="rival__hand-img">`;
                    rivalHand.appendChild(div);
                    return rivalHand;
                }
                function divPaper() {
                    const div = document.createElement("div");
                    div.innerHTML = `<img src=${paperPicURL} class="rival__hand-img">`;
                    rivalHand.appendChild(div);
                    return rivalHand;
                }
                function divScissors() {
                    const div = document.createElement("div");
                    div.innerHTML = `<img src=${scissorsPicURL} class="rival__hand-img">`;
                    rivalHand.appendChild(div);
                    return rivalHand;
                }
                const nums = [
                    {
                        number: 0,
                        action: divStone
                    },
                    {
                        number: 1,
                        action: divPaper
                    },
                    {
                        number: 2,
                        action: divScissors
                    },
                    {
                        number: 3,
                        action: divStone
                    },
                    {
                        number: 4,
                        action: divPaper
                    },
                    {
                        number: 5,
                        action: divScissors
                    },
                    {
                        number: 6,
                        action: divStone
                    },
                    {
                        number: 7,
                        action: divPaper
                    },
                    {
                        number: 8,
                        action: divScissors
                    },
                    {
                        number: 9,
                        action: divStone
                    }
                ];
                for (const n of nums)if (n.number == jsonNumber) {
                    console.log("adentro del if", jsonNumber);
                    const numString = jsonNumber.toString();
                    const res = "1" + numString;
                    const a = n.action();
                    (0, _results.result)(res);
                    return a;
                }
            }
            randomNum();
            return shadow;
        }
    });
}

},{"3331a4d257c870d6":"9F5qN","14141431f6a62d5b":"aFQpL","7002c57c863bc8d5":"6oFW3","884d99c5cee166f7":"iEwyR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../results":"bu4qW"}],"bu4qW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "result", ()=>result);
function result(res) {
    customElements.define("results-el", class Results extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({
                mode: "open"
            });
            const div = document.createElement("div");
            div.innerHTML = `                
                <div class="window__text">
                <div class="window__result">${resultsText()}</div>                
                <div class="points__rival">Máquina:</div>                
                <div class="points__player">Vos:</div>                
                </div>
                <button class="window__button">Reintentar</button>                      
                `;
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
                    result: "draw"
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
                }
            ];
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
                }
            ];
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
                }
            ];
            const hand = res.toString().slice(0, 1);
            const rivalHand = res.toString().slice(1);
            const hands = hand + rivalHand;
            console.log("desde los resultados", hands);
            function resultsText() {
                if (hand == 1) {
                    for (const result of pointsStone)if (result.number == hands) {
                        if (result.result == "win") {
                            const winText = "Ganaste!\uD83D\uDE03";
                            return winText;
                        }
                        if (result.result == "lose") {
                            const loseText = "Perdiste\uD83D\uDE43";
                            return loseText;
                        }
                        if (result.result == "win") {
                            const drawText = "Empate\uD83D\uDE01";
                            return drawText;
                        }
                    }
                }
                if (hand == 2) {
                    for (const result of pointsPaper)if (result.number == hands) {
                        if (result.result == "win") {
                            const winText = "Ganaste!\uD83D\uDE03";
                            return winText;
                        }
                        if (result.result == "lose") {
                            const loseText = "Perdiste\uD83D\uDE43";
                            return loseText;
                        }
                        if (result.result == "win") {
                            const drawText = "Empate\uD83D\uDE01";
                            return drawText;
                        }
                    }
                }
                if (hand == 3) {
                    for (const result of pointsScissors)if (result.number == hands) {
                        if (result.result == "win") {
                            const winText = "Ganaste!\uD83D\uDE03";
                            return winText;
                        }
                        if (result.result == "lose") {
                            const loseText = "Perdiste\uD83D\uDE43";
                            return loseText;
                        }
                        if (result.result == "win") {
                            const drawText = "Empate\uD83D\uDE01";
                            return drawText;
                        }
                    }
                }
            }
            return shadow;
        }
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["2oZg2","h7u1C"], "h7u1C", "parcelRequire6ad3")

//# sourceMappingURL=index.b71e74eb.js.map
