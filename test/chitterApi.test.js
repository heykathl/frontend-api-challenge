const ChitterApi = require('../chitterApi.js')

require('jest-fetch-mock').enableMocks()

describe("chitterApi", () => {

  test("loadPeeps", async () => {
    fetch.resetMocks()

    fetch.mockResponseOnce(JSON.stringify({
      0: "Dear diary"
    }));

      const chitterApi = new ChitterApi();
      chitterApi.loadPeeps((peeps) => {
        expect(peeps[0]).toEqual("Dear diary");
      });
  })

  test("createPeep", () => {
    fetch.resetMocks()

    fetch.mockResponseOnce(JSON.stringify({
      body: "Good day"
    }));

    const chitterApi = new ChitterApi();
    chitterApi.createPeep("Good day", (peeps) => {
      expect(peeps.body).toEqual("Good day")
    })

  })
})