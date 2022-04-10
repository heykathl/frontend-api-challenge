class ChitterModel {
  constructor(){
    this.peeps = []
  }

  getPeeps(){
    return this.peeps
  }
  
  addPeep(peep){
    this.peeps.push(peep)
  }

  setPeeps(loadedPeeps){
    this.peeps = loadedPeeps
  }
  
}  
module.exports = ChitterModel;