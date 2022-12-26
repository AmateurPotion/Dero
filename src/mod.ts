import { App } from "dero/app.ts";
import debug from "dero/debug.ts"
import { CLEAR } from "cursor/mod.ts";
import { ensureDirSync, ensureFileSync } from "std/fs/mod.ts"

import { resolve } from "std/path/mod.ts";

const app = new App({});
app.once("init", () => {
    // init setup
    debug.logLevel = "debug"
    console.log(CLEAR);

    // checking file system

    ensureDirSync(resolve("addons"));
    ensureDirSync(resolve("saves"));
    ensureDirSync(resolve("settings"));
    ensureFileSync(resolve("settings", "config.json"));
});

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
    if(debug.active) {
        console.log(`console render width: ${width}, height: ${height}`)
    }
});

app.start();

export default app;