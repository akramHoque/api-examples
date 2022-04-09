// const loadQoutes  = () => {
//       fetch('https://api.kanye.rest')
//       .then(res => res.json())
//       .then(data => displayQuotes(data))
// }



// const displayQuotes = (info) => {
//       const qouteElement = document.getElementById('qoute');
//       qouteElement.innerText = info.quote;
// }

const loadQoutes = () => {
      fetch('https://api.kanye.rest')
      .then(res => res.json())
      .then(data => displayQuotes(data))
}

const displayQuotes = info => {
      const mainElement = document.getElementById('qoute');
      mainElement.innerText = info.quote ;
}