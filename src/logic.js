// Manage API Calls, and push results to Datapad.js

const axios = require('axios');

function getAPI(url) {
  return axios.get(url).then((response) => response.data)
}


export { getAPI };


// let answer;
// axios.get(url)

// .then(response=>{
//   answer = response.data.results[0].name
//   return answer
// })
// .catch(error=>{console.log(error)})