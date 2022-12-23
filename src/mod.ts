import { App } from "dero/app.ts";
import debug from "dero/debug.ts"
import util from "dero/util.ts"
import { goUp, CLEAR } from "cursor/mod.ts";

import config from "dero/default-config.json" assert { type: "json" };

const app = new App({});
app.once("init", () => {
    debug.logLevel = "debug"
    console.log(CLEAR);

});

app.on("message", msg => {
    debug.log(msg, "debug")
    goUp(1)
})

let bcs = Deno.consoleSize();

app.on("render", () => {
    // check terminal size
    const ccs = Deno.consoleSize();
    const { columns: width, rows: height } = ccs;

    if(bcs.columns != ccs.columns || bcs.rows != ccs.rows) {
        bcs = ccs;
        // resize event
    }

    // update render
    console.log(CLEAR);
    debug.log("H")

});

app.start();

export default app;