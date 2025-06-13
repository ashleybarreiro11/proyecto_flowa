const inputsearchBar = document.getElementById("search-bar")
async function food (){
    const Foodget = await fetch('https://dummyjson.com/recipes')
    const jsonfood = await Foodget.json()
    console.log(jsonfood); 
    return jsonfood
}
async function foodSearch (){
    const searchGet = await fetch(`https://dummyjson.com/recipes/search?q=${inputsearchBar.value}`)
    const parsefood = await searchGet.json()
    console.log(parsefood)
    return parsefood
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

function toFavorites(id){
const localUser = localStorage.getItem("logged-user")
const localUserJson = JSON.parse(localUser)
console.log(localUserJson.favorites,id); 
}


async function searchBar() {
    recipesContainer.innerHTML = ""
    const dataSearch = await foodSearch()
    dataSearch.recipes.forEach(item => {
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
        );
        recipesContainer.innerHTML += newRecipe.card();
    });
}

inputsearchBar.addEventListener("keypress", searchBar())
