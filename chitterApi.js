class ChitterApi {

  loadPeeps(callback) {
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
    .then((response) => response.json())
    .then((data) => {
      // console.log(data[0].body)
      callback(data)
  });
}

// async loadPeeps(callback) {
//   try {
//     const response = await fetch("https://chitter-backend-api-v2.herokuapp.com/")
//     const data = await response.json();
//     console.log(data)
//   } catch (e) {
//     console.log(e)
//     callback()
//   }
// }

  createPeep(peep, callback){
    fetch("https://chitter-backend-api-v2.herokuapp.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: peep 
      })
    })
      .then((response) => response.json())
      .then((data) => {
        callback(data);
      });
  }
}


module.exports = ChitterApi;