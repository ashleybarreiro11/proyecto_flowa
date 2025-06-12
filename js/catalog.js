async function food (){
    const Foodget = await fetch('https://dummyjson.com/recipes')
    const jsonfood = await Foodget.json()
    console.log(jsonfood); 
    return jsonfood
}

const data = food()
console.log(data);

const recipesContainer = document.getElementById("card-container")
async function createRecipes(dummy){
    const dataDummy = dummy.recipes
    console.log(dataDummy)
    dataDummy.forEach(item => {
        const newRecipe = new recipecard(
            item.id,
            item.name,
            item.image,
            item.ingredients,
            item.instructions,
            item.prepTimeMinutes,
            item.cookTimeMinutes,
            item.caloriesPerServing,
            item.servings,
            item.difficulty,
            item.cuisine,
            item.tags
        )
        recipesContainer.innerHTML += newRecipe.card()
        
    });
}

food().then(data => createRecipes(data))

function detail(id){
    window.location.href = `../pages/detail.html?id=${id}`
    console.log(id);
    
}

async function toFavorites(id){
  const data = await food()
  const localUser = localStorage.getItem("logged-user")
  const localUserJson = JSON.parse(localUser)
  const favoriteRecipe = data.recipes.find(item => item.id === id)
  localUserJson.favoritos.push(favoriteRecipe)
  localStorage.setItem("logged-user", JSON.stringify(localUserJson))
  const RegisteredUser = localUser.getItem("userRegistered")
  const RegisteredUserJson = JSON.parse(RegisteredUser)
   const userIndex = RegisteredUserJson.findIndex(item => item.email === localUserJson.email)
    RegisteredUserJson[userIndex] = {
      ...RegisteredUserJson[userIndex],
      favoritos: localUserJson.favoritos
    }
    localStorage.setItem("userRegistered", JSON.stringify(RegisteredUserJson))
}

