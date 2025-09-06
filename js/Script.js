// Tu tarea: Sistema completo de inventario 
// 1. Array de productos (objeto con id, nombre, precio, categoria, stock) 
// 2. Funciones para: agregar, buscar, filtrar por categoría 
// 3. Calcular valor total del inventario 
// 4. Productos con stock bajo (menos de 5)

//--------------------------------------------------------------------------------functions-----------------------------------------------
function carga_productos(ID, nombre, precio, categoria, stock){
    let id, name, price, cat, sto = 0
    id = parseInt(prompt("ingrese el id del producto\n"))
    while(id < 0){
        id = parseInt(prompt("ERROR, ingrese el id del producto\n"))
    }
    while(id != 0){
        name = prompt("ingrese el nombre del producto").toUpperCase()
        while (name == " ") {
            name = prompt("ERROR, ingrese el nombre del producto correctamente").toUpperCase()
        }   
        price = Number(prompt("ingrese el precio unitario del producto"))
        while (price < 0) {
            price = Number(prompt("ERROR, ingrese el precio unitario del producto nuevamente"))
        }
        cat = prompt("ingrese una categoria")
        while (cat == " ") {
            cat = prompt("ERROR, ingrese una categoria nuevamente")
        }
        sto = parseInt(prompt("ingrese el stock del producto"))
        while (sto < 0) {
             sto = parseInt(prompt("ERROR, ingrese el stock del producto nuevamente"))
        }
        ID.push(id)
        nombre.push(name)
        precio.push(price)
        categoria.push(cat)
        stock.push(sto)
        id = parseInt(prompt("ingrese el id del producto\n"))
        while(id < 0){
        id = parseInt(prompt("ERROR, ingrese el id del producto\n"))
        }
    }
}

function opciones(ID, nombre, precio, categoria, stock){
    let opcion, total = 0, reload
    console.log("ingrese una de las opciones")
    console.log("1- agregar un producto")
    console.log("2- buscar elemento")
    console.log("3- filtrar productos")
    console.log("4- valor total del inventario")
    console.log("5- producto con stock mas vajo")
    opcion = parseInt(prompt(" ingrese una opcion"))
    while(opcion){
        switch (opcion) {
        case 1:
            agregar_producto(ID, nombre, precio, categoria, stock)
            break;
        case 2: 
            buscar_producto(ID, nombre, precio, categoria, stock)
            break;
        case 3: 
            filtrar(ID, nombre, precio, categoria, stock)
            break;
        case 4: 
            total = valor_total_inventario(precio, stock)
            console.log(`el precio general del inentaro es de $${total}`)
            break;
        case 5: 
            menor_stock(ID, nombre, precio, categoria, stock)
            break;
    
        default:
            console.log("ERROR, numero mal ingresado")
            break;
    }
    reload = parseInt(prompt(" desea ver otra opcion? 1 es si y 0 es no"))
    if (reload == 1) {
        console.log("ingrese una de las opciones")
        console.log("1- agregar un producto")
        console.log("2- buscar elemento")
        console.log("3- filtrar productos")
        console.log("4- valor total del inventario")
        console.log("5- producto con stock mas vajo")
        opcion = parseInt(prompt(" ingrese una opcion"))
    }else{
        break;
    }
    }
    
}
function agregar_producto(ID, nombre, precio, categoria, stock){
     let id, name, price, cat,sto
    id = parseInt(prompt("ingrese el id del producto\n"))
    while(id <= 0){
        id = parseInt(prompt("ERROR, ingrese el id del producto\n"))
    }
    name = prompt("ingrese el nombre del producto").toUpperCase()
        while (name == " ") {
            name = prompt("ERROR, ingrese el nombre del producto correctamente").toUpperCase()
        }   
        price = Number(prompt("ingrese el precio unitario del producto"))
        while (price < 0) {
            price = Number(prompt("ERROR, ingrese el precio unitario del producto nuevamente"))
        }
        cat = prompt("ingrese una categoria")
        while (cat == " ") {
            cat = prompt("ERROR, ingrese una categoria nuevamente")
        }
        sto = parseInt(prompt("ingrese el stock del producto"))
        while (sto < 0) {
             sto = parseInt(prompt("ERROR, ingrese el stock del producto nuevamente"))
        }
        ID.push(id)
        nombre.push(name)
        precio.push(price)
        categoria.push(cat)
        stock.push(sto)
}

function buscar_producto(ID, nombre, precio, categoria, stock){
    let id, existencia, pos
    console.log("ID'S")
    for (let i = 0; i < ID.length; i++) {
        console.log("ID n°"+i+" "+ID[i])
        console.log("\n")
    }
    id = parseInt(prompt("ingrese el ID que busca"))
    existencia = ID.includes(id)
    pos = ID.indexOf(id)
    if (existencia == true) {
        console.log(id + " existe y es:\n")
        console.log("ID     Nombre     Precio unitario     Categoria     Stock\n")
        console.log(`${ID[pos]}     ${nombre[pos]}     ${precio[pos]}     ${categoria[pos]}     ${stock[pos]}`)
    }else{
        console.log(id + " no existe\n")
    }
}

function filtrar(ID, nombre, precio, categoria, stock){
    let cat, pos, encontar
    cat = prompt("ingrese la categira que desea filtrar")
    encontrar = categoria.includes(cat)
    while(encontar === false){
        cat = prompt("ERROR, ingrese la categoria que desea filtrar")
    }
    for (let i = 0; i < ID.length; i++) {
        if (cat == categoria[i]) {
            console.log("ID     Nombre     Precio unitario     Categoria     Stock\n")
            console.log(`${ID[i]}     ${nombre[i]}     ${precio[i]}     ${categoria[i]}     ${stock[i]}`)
        }
    }
}

function valor_total_inventario(precio, stock){
    let acumulador = 0, prod = 0;
    for (let i = 0; i < precio.length; i++) {
        prod = precio[i]*stock[i]
        acumulador+=prod
    }
    return acumulador
}

function menor_stock(ID, nombre, precio, categoria, stock){
    for (let i = 0; i < ID.length; i++) {
        if (stock[i] < 5) {
            console.log("El/Los productos con menos de 5 unidades son:\n")
            console.log("ID     Nombre     Precio unitario     Categoria     Stock")
            console.log(`${ID[i]}     ${nombre[i]}     ${precio[i]}     ${categoria[i]}     ${stock[i]}`)
        }
        
    }
}
function mostrar(ID, nombre, precio, categoria, stock){
    console.log("ID     Nombre     Precio unitario     Categoria     Stock\n")
    for (let i = 0; i < ID.length; i++) {
        console.log(`${ID[i]}     ${nombre[i]}     ${precio[i]}     ${categoria[i]}     ${stock[i]}`)
    }
}
function borrar_produtco(ID, nombre, precio, categoria, stock){
    let prod
    existencia = ID.indexOf(id)
    console.log("productos:\n")
    for (let i = 0; i < ID.length; i++) {
        console.log(` producto de la posicion ${i} es: ${nombre[i]}`)
    }
    prod = prompt("ingrese el producto a borra\n")
    for (let i = 0; i < ID.length; i++) {
        ID.shift()
    }
}
//--------------------------------------------------------------------------------end-functions-------------------------------------------

//-------------------------------------------------------------------------------main----------------------------------------------------

const ID = [], nombre = [], precio = [], categoria = [], stock = []
carga_productos(ID, nombre, precio, categoria, stock)
if (ID.length != 0) {
    console.log("productos\n")
    mostrar(ID, nombre, precio, categoria, stock)
    opciones(ID, nombre, precio, categoria, stock)
    console.log("Los productos\n")
    mostrar(ID, nombre, precio, categoria, stock)
}else{
    console.log("no se ha ingresado ningun producto")
}















 