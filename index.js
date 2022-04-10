const ChitterModel = require('./chitterModel.js')
const ChitterView = require('./chitterView.js')
const ChitterApi = require('./chitterApi.js')

const chitterModel = new ChitterModel();
const chitterApi = new ChitterApi();
const chitterView = new ChitterView(chitterModel, chitterApi)

// console.log('HELLO')
// chitterModel.addPeep('Hello')
// chitterModel.addPeep('Bye')
// chitterView.viewPeeps()

chitterApi.loadPeeps((loadedPeeps) => {
  chitterModel.setPeeps(loadedPeeps);
  chitterView.viewPeeps();
})

