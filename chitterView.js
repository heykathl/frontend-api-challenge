class ChitterView {
  constructor(model, api){
    this.model = model
    this.api = api
    this.peepContainerEl = document.querySelector('#peep-container')
    this.button = document.querySelector('#peep-button')
    this.button.addEventListener('click', () => {
      const inputValue = document.querySelector('#peep-input');
      this.model.addPeep(inputValue.value)
      this.viewPeeps()
    })
  }

  viewPeeps(){
    const oldPeeps = document.querySelectorAll('.peep');
    oldPeeps.forEach(peep => peep.remove());

    // const loadedPeeps = await this.api.loadPeeps()
    // this.model.setPeeps(loadedPeeps)
    const peeps = this.model.getPeeps();
    // console.log(peeps)
    peeps.forEach(peep => {
    
      const div = document.createElement("div");
      div.innerText = peep.body;
      div.className = 'peep';
      this.peepContainerEl.append(div);

    });
    document.querySelector('#peep-input').value = "";
  }

  addPeep(peep){
    this.api.createPeep(peep)
  }

}

module.exports = ChitterView;