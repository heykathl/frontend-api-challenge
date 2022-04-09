class ChitterView {
  constructor(model){
    this.model = model
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

    const peeps = this.model.getPeeps();
    
    peeps.forEach(peep => {
    
      const div = document.createElement("div");
      div.innerText = peep;
      div.className = 'peep';
      this.peepContainerEl.append(div);

    });
    document.querySelector('#peep-input').value = "";
  }

}

module.exports = ChitterView;