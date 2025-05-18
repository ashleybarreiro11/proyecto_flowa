class recipecard{
    constructor(id,name,imagen,ingredients,instrucctions,prepTimeMinutes,cookTimeMinutes,caloriesPerServing,difficulty,cuisine,tags){
       
        this.id = id
        this.name = name 
        this.imagen = imagen
        this.ingredients = ingredients
        this.instructions = instrucctions
        this.prepTimeMinutes = prepTimeMinutes
        this.cookTimeMinutes = cookTimeMinutes
        this.caloriesPerServing = caloriesPerServing
        this.difficulty = difficulty
        this.cuisine = cuisine
        this.tags = tags
    }
    card(){
        return `            
        <div class="recipe-card1">
                <button class="favorite-btn">
                    <i class="fa fa-heart" aria-hidden="true"></i>
                </button>
                <img src="${this.imagen}" alt="Chocolate Chips Cookie" onclick="detail(${this.id})">
                <h2 class="productname">${this.name}</h2>
                <p>Difficulty: ${this.difficulty}</p>
            </div>`
    }
    detailRecipes(){
        imageDetail.src = `${this.imagen}`
        nameDetail.innerHTML = this.name
    }
}

