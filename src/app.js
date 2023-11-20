import { Description } from "./app_init.js";
import { Tamplate } from "./app_init.js";

document.addEventListener("DOMContentLoaded", e => {
    console.log(e.target);
    console.table(Description);
    Tamplate.printF();
});