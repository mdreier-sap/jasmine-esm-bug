import Demo from "../src/demo.js"
import fetchMock from 'fetch-mock';

describe("Demo", function() {
    it("should work", async function() {
        const sandbox = fetchMock.sandbox();

        sandbox.get("https://google.com", 200);

        const demo = new Demo(sandbox);
        await demo.execute();
        expect(true).toBeTruthy();
    })
})