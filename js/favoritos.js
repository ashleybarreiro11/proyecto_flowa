
const user = localStorage.getItem("logged-user") //string
 const userObj = JSON.parse(user) //JSON (objeto)
const favoritesContainer = document.getElementById("favorites-container")
 function createRecipes(user){
    const dataUser = user.favoritos
    console.log(dataUser)
    dataUser.forEach(item => {
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
        
        favoritesContainer.innerHTML += newRecipe.cardfavorites()

        
    });
} 

createRecipes(userObj)

function detail(id){
    window.location.href = `../pages/detail.html?id=${id}`
    console.log(id);
    
}

async function deleteFavorites(id){
  const localUser = localStorage.getItem("logged-user")
  const localUserJson = JSON.parse(localUser)
  const favoriteRecipe = localUserJson.favoritos.findIndex(item => item.id === id)
  localUserJson.favoritos.splice(favoriteRecipe,1)
  localStorage.setItem("logged-user", JSON.stringify(localUserJson))
  const RegisteredUser = localStorage.getItem("userRegistered")
  const RegisteredUserJson = JSON.parse(RegisteredUser)
   const userIndex = RegisteredUserJson.findIndex(item => item.email === localUserJson.email)
    RegisteredUserJson[userIndex] = {
      ...RegisteredUserJson[userIndex],
      favoritos: localUserJson.favoritos
    }
    localStorage.setItem("userRegistered", JSON.stringify(RegisteredUserJson))
}
