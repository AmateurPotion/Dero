type Locale = "ko" | "en";

let currentLocale: Locale = "ko";

let bundle = new Map<string, string>();

function getString(key: string, packageName: string ) {

}

export default { 
    get current() { return currentLocale; }, set current(locale: Locale) {
        if(locale != currentLocale) {
            currentLocale = locale;
            bundle = new Map();
        }
    },
    getString
}