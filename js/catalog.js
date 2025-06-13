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

//Categorias

const contenedorRecetas = document.getElementById("card-container");
const filtroCategorias = document.getElementById("filtro-tags"); // Reutilizamos el <select>
const barraBusqueda = document.getElementById("search-bar");
const contadorResultados = document.querySelector(".filter-bar span");

async function obtenerRecetas() {
    const respuesta = await fetch("https://dummyjson.com/recipes");
    const datos = await respuesta.json();
    return datos.recipes;
}

function mostrarRecetas(recetas) {
    contenedorRecetas.innerHTML = "";
    contadorResultados.textContent = `${recetas.length} Resultado${recetas.length !== 1 ? "s" : ""}`;

    recetas.forEach((receta) => {
        const tarjeta = new recipecard(
            receta.id,
            receta.name,
            receta.image,
            receta.ingredients,
            receta.instructions,
            receta.prepTimeMinutes,
            receta.cookTimeMinutes,
            receta.caloriesPerServing,
            receta.servings,
            receta.difficulty,
            receta.cuisine,
            receta.tags
        );
        contenedorRecetas.innerHTML += tarjeta.card();
    });
}

async function cargarCategoriasCuisine() {
    const recetas = await obtenerRecetas();
    const cocinasUnicas = new Set();

    recetas.forEach((receta) => {
        if (receta.cuisine) {
            cocinasUnicas.add(receta.cuisine.toLowerCase());
        }
    });

    cocinasUnicas.forEach((cocina) => {
        const opcion = document.createElement("option");
        opcion.value = cocina;
        opcion.textContent = cocina.charAt(0).toUpperCase() + cocina.slice(1);
        filtroCategorias.appendChild(opcion);
    });
}

filtroCategorias.addEventListener("change", async () => {
    const seleccion = filtroCategorias.value;
    const recetas = await obtenerRecetas();

    const filtradas = seleccion === ""
        ? recetas
        : recetas.filter((receta) => receta.cuisine.toLowerCase() === seleccion);

    mostrarRecetas(filtradas);
});

async function searchBar() {
    const texto = barraBusqueda.value.toLowerCase();
    const recetas = await obtenerRecetas();

    const filtradas = recetas.filter((receta) =>
        receta.name.toLowerCase().includes(texto)
    );

    mostrarRecetas(filtradas);
}

(async () => {
    const recetas = await obtenerRecetas();
    mostrarRecetas(recetas);
    await cargarCategoriasCuisine();
})(); 