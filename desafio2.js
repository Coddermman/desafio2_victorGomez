//crear la clase ProducManager con su constructor
class ProductManager {
    #products //privado
    #error
    constructor(){
        this.#products= [] //arreglo vacío
        this.#error = undefined
    }
// metodo para devolver el arreglo con todos los productos creados
    getProducts = ()=> this.#products

//metodo para buscar en el arreglo el producto por el id
    getProductById = (id) => {
        const product = this.#products.find(item => item.id === id); console.log(`el archibo solicitado id= ${id}: `)
        if (!product) return `el registro con id ${id} no existe Not found`
        return product
    }

    #generatedId = () => (this.#products.length === 0) ? 1 : this.#products[this.#products.length-1].id+1

//validar que el producto tenga todos las propiedades antes de ingresarlo al arreglo
    #validationProduct = (title, description, price, thumbnail, code, stock) => {
    if (!title || !description || !price  || !thumbnail || !code || !stock) {
    this.#error = `[${title}] : campos incompletos`
    return 
    } else 
// validar que la propiedad "codigo" no esté duplicada
    {
    const found = this.#products.find(item => item.code === code)
    if (found) this.#error =`[${title}] : el code ya existe`
    else this.#error = undefined
    }
}   
// metodo para agregar productos al arreglo con las propiedades soliictadas
    addProducts = (title, description, price, thumbnail, code, stock) => {
      this.#validationProduct(title, description, price, thumbnail, code, stock) 
      if(this.#error === undefined) 
      this.#products.push({id: this.#generatedId(), title, description, price, thumbnail, code, stock}) 
      else console.log(this.#error)
    }
          
    }  

//instanciando los productos con sus respectivas propiedades:
    const productManager = new ProductManager()

    productManager.addProducts(
    "God of War Ragnarök", 
    "Standard Edition Sony PS4 Físico", 
    49900, 
    "https://falabella.scene7.com/is/image/Falabella/gsc_115754141_1257155_1?wid=1500&hei=1500&qlt=70",
    10001,
    10
)
productManager.addProducts(
    "Fifa 18 Ps3", 
    "Juego Original Playstation 3", 
    13970, 
    "https://http2.mlstatic.com/D_NQ_NP_823438-MLC46417899754_062021-O.webp", 
    10002,
    15
)
productManager.addProducts(
    "GRAN TURISMO 7 PS5", 
    "más de 420 autos disponibles en Brand Central y el concesionario de autos usados desde el primer día", 
    13970, 
    "https://www.weplay.cl/pub/media/catalog/product/cache/3f1b140c3c9f36fbf6b01dffb521c246/7/1/711719541400_1.jpg" ,
    10003,
    10
)
productManager.addProducts(
    "Elden Ring Standard", 
    "Edition Bandai Namco PS4 Físico", 
    51900,
    "https://http2.mlstatic.com/D_NQ_NP_903791-MLA51178807345_082022-O.webp" ,
    10004,
    6
)  
//pruebas en consola de la ejecución del programa:
console.log(productManager.getProducts()) // presenta todos los productos
console.log(productManager.getProductById(3))// probar que no existe el producto con el id 7