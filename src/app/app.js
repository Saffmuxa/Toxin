const html = require("./app.pug"); // for CommonJS syntax use the loader option `esModule: false`
// import html from "./app.pug";
// import ui from "../templates/pages/ui.pug";
const appRootId = "app-root";

export function app() {
  const appRootContainer = document.getElementById(appRootId);
  // appRootContainer.innerHTML = html;
}
