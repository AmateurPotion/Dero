import { App } from "dero/App.ts";
import { goUp } from "cursor/mod.ts";

const app = new App({});

app.on("message", msg => {
    console.log(`%c${msg}`, "color: red");
    goUp(1)
})

let bcs = Deno.consoleSize();

app.on("render", () => {
    // check terminal size
    const ccs = Deno.consoleSize();

    if(bcs.columns != ccs.columns || bcs.rows != ccs.rows) {
        bcs = ccs;
    }
});

console.log(Deno.consoleSize())

app.start();