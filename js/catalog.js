const contenedorRecetas = document.getElementById("card-container");
const filtroCategorias = document.getElementById("filtro-tags"); // Reutilizamos el <select>
const contadorResultados = document.querySelector(".filter-bar span");
const barraBusqueda = document.getElementById("search-bar");
async function food (){
    const Foodget = await fetch('https://dummyjson.com/recipes')
    const jsonfood = await Foodget.json()
    console.log(jsonfood); 
    return jsonfood
}


async function foodSearch (){
    const searchGet = await fetch(`https://dummyjson.com/recipes/search?q=${barraBusqueda.value}`)
    const parsefood = await searchGet.json()
    console.log(parsefood)
    return parsefood
}


const data = food()
console.log(data);

const loggedUser = localStorage.getItem("logged-user")
const catalogTitle = document.getElementById("title-catalog")
catalogTitle.innerText = `Descubre tus recetas, ${JSON.parse(loggedUser).nombre}`

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
  const RegisteredUser = localStorage.getItem("userRegistered")
  const RegisteredUserJson = JSON.parse(RegisteredUser)
   const userIndex = RegisteredUserJson.findIndex(item => item.email === localUserJson.email)
    RegisteredUserJson[userIndex] = {
      ...RegisteredUserJson[userIndex],
      favoritos: localUserJson.favoritos
    }
    localStorage.setItem("userRegistered", JSON.stringify(RegisteredUserJson))
}


