const ChitterModel = require('./chitterModel.js')
const ChitterView = require('./chitterView.js')

const chitterModel = new ChitterModel();
const chitterView = new ChitterView(chitterModel)

chitterModel.addPeep('Hello')
chitterModel.addPeep('Bye')
chitterView.viewPeeps()