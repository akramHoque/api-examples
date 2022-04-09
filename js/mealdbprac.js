
const searchFood = () =>{
      const searchField = document.getElementById('search-field');
      const searchText = searchField.value ;
      searchField.value = '' ;
    
      const url = 
       `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}` 
       
       fetch(url)
       .then(res => res.json())
       .then(data => displaySearchResult(data.meals))

}

const displaySearchResult = meals =>{
      const searchResult = document.getElementById('search-result');
     meals.forEach(meal =>{
      const div = document.createElement('div');
      div.classList.add('col');
      div.innerHTML = `

    <div onclick = "loadMealsDetails(${meal.idMeal})" class="card">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
      </div>
    </div>
  </div>    
  `
  
  searchResult.appendChild(div);

     });

}

const loadMealsDetails = mealId =>{
     const url = `

     https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
     fetch(url)
     .then(res => res.json())
     .then(data => displayMealsDetails(data.meals[0]))

}

const displayMealsDetails = details =>{

      const mealDetail = document.getElementById('meal-detail');
      mealDetail.textContent = ''
      const div = document.createElement('div');
      div.classList.add('card');
      div.innerHTML = `
      
     
  <img src="${details.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${details.strMeal}</h5>
    <p class="card-text">${details.strInstructions.slice(0, 200)}</p>
    <a href="${details.strYoutube}" class="btn btn-primary">Go somewhere</a>
  </div>

      `
      mealDetail.appendChild(div);
}