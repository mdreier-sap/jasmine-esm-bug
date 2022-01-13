import fetch from 'node-fetch'

export default class Demo {

    constructor(fetchImpl) {
        this.fetch = fetchImpl || fetch;
    }

    async execute() {
        await this.fetch("https://google.com");
        return true;
    }
}