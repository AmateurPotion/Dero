// deno-lint-ignore prefer-const
let active = true;

const LogLevel =  {
    none: 0,
    info: 1,
    err: 2,
    debug: 3
}

let currentLevel: keyof typeof LogLevel = "info";

function log(msg: string, level: keyof typeof LogLevel = "info") {
    if(LogLevel[currentLevel] >= LogLevel[level] && active) {
        switch (level) {
            case "debug": { console.log(`%c${msg}`, "color: yellow"); break; }
            case "err": { console.log(`%c${msg}`, "color: red; background-color: white; text-decoration: bold"); break; }
            case "info": { console.log(msg); break; }
            case "none": { break; }
        }
    }
}

export default { 
    get logLevel() { return currentLevel }, set logLevel(level: keyof typeof LogLevel) { currentLevel = level; },
    log, active
}