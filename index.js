class ProductManager{
    constructor() {
        this.products = [];
    }

    static id = 0;

    addProduct(title, description, price, image, code, stock) {
        for(i = 0; i < this.products.length;i++){
            if(this.products[i].code === code) {
                console.log(`El codigo ${code} esta repetido`)
                break;
            }
        }

        const newProduct = {
            title, description, price, image, code, stock
        }

        if(Object.values(newProduct).includes(undefined)){
            ProductManager.id++
            this.products.push({ ...newProduct, id:ProductManager.id})
        }else{
            console.log("Todo los campos son requeridos")
        }

    }

    getProduct() {
        return this.products;
    }

    Existe (id) {
        return this.products.find((producto) => producto.id === id)
    }

    getProductById(id){
        !this.Existe(id) ? console.log("Nout Found") : console.log(this.Existe(id));
        
    }
}

productos = new ProductManager

productos.addProduct("titulo1", "descripcion", 1000, "imagen1", "abx123", 5);
productos.addProduct("titulo2", "descripcion2", 1000, "imagen2", "abx124", 6);

console.log(productos.getProduct());

productos.addProduct("titulo3", "descripcion3", 1000, "imagen3", "abx124", 7);

productos.getProductById(2);

productos.getProductById(3);