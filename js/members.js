const membersData = [{
    nombre: "Ashley Valentina Barreiroen",
    img: "../images/ashley.png",
    titulo: "Marketing Specialist y UI Designer",
    descripcion:"Apasionada por el marketing y el diseño de medios interactivos, con especialización en experiencia de usuario. Su enfoque fusiona creatividad y estrategia para diseñar experiencias memorables que fortalecen la conexión entre marcas y personas."

},
{
    nombre: "valen",
    img: "asiojdioasjd",
    titulo: "soy genial",
    descripcion:"aosdjaosidj"

},
{
    nombre: "valen",
    img: "asiojdioasjd",
    titulo: "soy genial",
    descripcion:"aosdjaosidj"

}]
class memberobject{
    constructor(nombre, img, titulo, descripcion)
    {
        this.nombre = nombre
        this.img = img
        this.titulo = titulo
        this.descripcion = descripcion
    }
    card(){
        return `            
        <div class="member">
                <img src="${this.img}" class="member-img" alt="Ashley Valentina Barreiro">
                <h3>${this.nombre}</h3>
                <h3 class="italic">${this.titulo}</h3>
		        <h4>${this.descripcion}</h4>
            </div>`
    }}
const membersContainer = document.getElementById("members-container")

function createMember(members){
    const infoMember = members
    console.log(infoMember)
    infoMember.forEach(item => {
        const newMember = new memberobject (
            item.nombre,
            item.img,
            item.titulo,
            item.descripcion
        )
        
        membersContainer.innerHTML += newMember.card()

        
    });
}

createMember(membersData)