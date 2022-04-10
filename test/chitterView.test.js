/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const ChitterModel = require('../chitterModel.js');
 const ChitterView = require('../chitterView.js');
 
 describe("chitterView", () => {
 
  let chitterModel;
  let chitterView;

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    chitterModel = new ChitterModel();
    chitterView = new ChitterView(chitterModel);
  });

  test("viewPeeps", () => {
    chitterModel.addPeep("LA LISA");
    chitterModel.addPeep("Meow");
    chitterView.viewPeeps();
    expect(document.querySelectorAll('.peep').length).toBe(2);
  })

  test("addPeep", () => {
    const inputValue = document.querySelector('#peep-input');
    inputValue.value = "Good morning";
    const button = document.querySelector('#peep-button');
    button.click();
    expect(document.querySelectorAll('.peep')).not.toBeNull();
    // expect(document.querySelectorAll('.peep').innerText).toBe("Good morning");
  })

  test("when viewPeeps called twice, right number of peeps are displayed", () => {
    chitterModel.addPeep('One');
    chitterModel.addPeep('Two');
    chitterView.viewPeeps();
    chitterView.viewPeeps();
    expect(document.querySelectorAll('.peep').length).toBe(2)
  });

  test('input field is empty when button is clicked', () => {
    const inputValue = document.querySelector('#peep-input');
    inputValue.value = "Good morning";
    const button = document.querySelector('#peep-button');
    button.click();
    expect(document.querySelector('#peep-input').value).toBe("")
  })
})