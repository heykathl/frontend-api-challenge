const ChitterModel = require('../chitterModel.js')

describe("chitterModel", () => {

  test('returns empty array of peeps', () => {
    const chitterModel = new ChitterModel();
    expect(chitterModel.getPeeps()).toEqual([])
  });

  test('add peeps', () => {
    const chitterModel = new ChitterModel();
    chitterModel.addPeep('Today was fun');
    chitterModel.addPeep('I am king');
    expect(chitterModel.getPeeps()).toEqual(['Today was fun', 'I am king'])
  })
})