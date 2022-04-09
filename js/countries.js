
// const loadCountries = () =>{
//       fetch('https://restcountries.com/v2/all')
//       .then(res => res.json())
//       .then(data => displayCountries (data))
// }

// loadCountries();
//  const displayCountries = country =>{
//       const countryDiv = document.getElementById('countries');
//       country.forEach(country => {
//             const div = document.createElement('div');
//             div.classList.add('country') ;
//             div.innerHTML = `
//             <h3>${country.name} </h3>
//             <p> ${country.capital}</p>
//             <button onclick = "loadCountryDetail('${country.name}')">Detail </button>
//             `;

//             countryDiv.appendChild(div);
//       });

//  }

//  const loadCountryDetail = name =>{
//      const url = `https://restcountries.com/v2/name/${name}`;
//      fetch(url)
//       .then(res => res.json())
//     .then(data => displayDetail(data[0]));

//  }
// const displayDetail = country => {
//       const countryDiv = document.getElementById('country-detail');
//       countryDiv.innerHTML = 
//        `<h5> ${country.name} </h5>
//       <p> ${country.population} </p>
//       <img width = "200px" src = "${country.flag}" >
//       `;
// }


const loadCountries = () =>{
      fetch('https://restcountries.com/v2/all')
      .then(res => res.json())
      .then(data => displayCountries(data))
}


loadCountries();

const displayCountries = desh => {
      const divContainer = document.getElementById('countries');
  
      desh.forEach( desh => {
            const div = document.createElement('div');
            div.className = "country"
            div.innerHTML = 
            `<h3>${desh.name} </h3>
            <p> ${desh.capital}</p>
            <button onclick ="loadDetail('${desh.name}')">Load Detail</button>
            `
            divContainer.appendChild(div);


      })
      
      
}

const loadDetail = name => {
     const url = `https://restcountries.com/v2/name/${name}`

     fetch(url)
     .then(res => res.json())
     .then(data => displayDetail(data[0]))
}

const displayDetail = info =>{
      const infoDiv = document.getElementById('country-detail');
      infoDiv.innerHTML = 
      `<h3>${info.name} </h3>
      <p> ${info.population}</p>
      <img width = "200px"; src = "${info.flag}">
      
      `
}