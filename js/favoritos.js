
const user = localStorage.getItem("logged-user")
 const userObj = JSON.parse(user)
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
            item.difficulty,
            item.cuisine,
            item.tags
        )
        favoritesContainer.innerHTML += newRecipe.card()

        
    });
} 

createRecipes(userObj)
