const browsers = {
    CHROME: 'chrome',
    FF: 'firefox',
    EDGE: 'edge',
    SAFARI: 'safari'
}



function execute() {
    switch (browsers) {
        case browsers.CHROME:
            console.log('execute chrome');
            break;

        case browsers.FF:
            console.log('execute firefox');
            break;

        case browsers.EDGE:
            console.log('execute edge');
            break;

        case browsers.SAFARI:
            console.log('execute safari');
            break;
    }
}
console.log(execute());