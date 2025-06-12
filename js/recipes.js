class recipecard{
    constructor(id,name,image,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,caloriesPerServing,servings,difficulty,cuisine,tags){
       
        this.id = id
        this.name = name 
        this.image = image
        this.ingredients = ingredients
        this.instructions = instructions
        this.prepTimeMinutes = prepTimeMinutes
        this.cookTimeMinutes = cookTimeMinutes
        this.caloriesPerServing = caloriesPerServing
        this.servings = servings
        this.difficulty = difficulty
        this.cuisine = cuisine
        this.tags = tags
    }
    card(){
        return `            
        <div class="recipe-card1">
                <button onclick="toFavorites(${this.id})" class="favorite-btn"> 
                    <i class="fa fa-heart" aria-hidden="true"></i>
                </button>
                <img src="${this.image}" alt=" " onclick="detail(${this.id})">
                <h2 class="productname" onclick="detail(${this.id})">${this.name}</h2>
                <p>Preparation time: ${this.prepTimeMinutes}</p>
                <p>Difficulty: ${this.difficulty}</p>
                <p>Cuisine: ${this.cuisine}</p>
            </div>`
    }
    detailRecipes(){
        imageDetail.src = `${this.image}`
        nameDetail.innerHTML = this.name
        prepTimeDetail.innerHTML = this.prepTimeMinutes
        cookTimeDetail.innerHTML = this.cookTimeMinutes 
        servingsDetail.innerHTML = this.servings
        difficultyDetail.innerHTML = this.difficulty
        cuisineDetail.innerHTML = this.cuisine
        caloriesDetail.innerHTML = this.caloriesPerServing
        tagsDetail.innerHTML = this.tags
        ingredientsDetail.innerHTML = `<ul>${this.ingredients.map(element => `<li>${element}</li>`).join('')}</ul>`
        instructionsDetail.innerHTML = `<ol>${this.instructions.map(element => `<li>${element}</li>`).join('')}</ol>`
    }
} 

