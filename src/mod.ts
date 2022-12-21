import { App } from "dero/app.ts";
import debug from "dero/debug.ts"
import { goUp } from "cursor/mod.ts";

const app = new App({});

app.once("init", () => {
    debug.logLevel = "debug"
    debug.log("test", "err")
});

app.on("message", msg => {
    debug.log(msg, "debug")
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