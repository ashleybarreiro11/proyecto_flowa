async function food (){
    const Foodget = await fetch('https://dummyjson.com/recipes')
    const jsonfood = await Foodget.json()
    console.log(jsonfood); 
    return jsonfood
}

const imageDetail = document.getElementById("image-detail")
const nameDetail = document.getElementById("name-detail")
const prepTimeDetail = document.getElementById("prep-time-detail")
const cookTimeDetail = document.getElementById("cook-time-detail")
const servingsDetail = document.getElementById("servings-detail")
const difficultyDetail = document.getElementById("difficulty-detail")
const cuisineDetail = document.getElementById("cuisine-detail")
const caloriesDetail = document.getElementById("calories-detail")
const tagsDetail = document.getElementById("tags-detail")
const ingredientsDetail = document.getElementById("ingredients-container")
const instructionsDetail = document.getElementById("instructions-container")

const params = new URLSearchParams(window.location.search)
const id = params.get("id")

async function createDetail(id){
    const data = await food()
    const recipe = data.recipes.find(recipe => recipe.id == id)
    const detail = new recipecard(
            recipe.id,
            recipe.name,
            recipe.image,
            recipe.ingredients,
            recipe.instructions,
            recipe.prepTimeMinutes,
            recipe.cookTimeMinutes,
            recipe.caloriesPerServing,
            recipe.servings,
            recipe.difficulty,
            recipe.cuisine,
            recipe.tags 
    )
detail.detailRecipes()
}
createDetail(id)