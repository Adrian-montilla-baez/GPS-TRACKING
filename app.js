class Product {
    constructor(name, email, telefono, direccion, fechasolicita, fechaentrega, servicio, price, year) {
        this.name = name;
        this.email = email;
        this.telefono = telefono;
        this.direccion = direccion;
        this.fechasolicita = fechasolicita;
        this.fechaentrega = fechaentrega;
        this.servicio = servicio;
        this.price = price;
        this.year = year;
    }
}

class UI {
    addProduct(product) {
       const productList = document.getElementById('product-list');
       const element = document.createElement('div');
       element.innerHTML = `
       
       <div class="card text-center mb-4">
            <div class="card-body">
                <strong><i class="fa-solid fa-user-check"></i> Nombre Cliente</strong> : ${product.name}
                <strong><i class="fa-solid fa-envelope-open-text"></i> Email del Cliente</strong> : ${product.email}
                <strong><i class="fa-solid fa-mobile-screen"></i> Telefono Cliente</strong> : ${product.telefono}
                <strong><i class="fa-solid fa-map-location-dot"></i> Direccion Cliente</strong> : ${product.direccion}
                <strong><i class="fa-solid fa-calendar-lines-pen"></i> Fecha Servicio Solicitado</strong> : ${product.fechasolicita}
                <strong><i class="fa-solid fa-calendar-star"></i> Fecha de Entrega del Servicio</strong> : ${product.fechaentrega}
                <strong><i class="fa-solid fa-keyboard"></i> Categoria Servicio</strong> : ${product.servicio}
                <strong><i class="fa-solid fa-square-dollar"></i> Costo Servicio</strong> : ${product.price}
                <strong><i class="fa-solid fa-calendar-days"></i> Año Actual.</strong> : ${product.year}
                <a href="#" class="btn btn-danger" name = "delete">Delete <i class="fa-solid fa-trash-can"></i></a>
            </div>
       </div>
       
       `;
       productList.appendChild(element);
    }

    resetForm(){
        document.getElementById('product-form').reset();
    }
    deleteProduct (element){
        if (element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Cliente eliminado con exito!', 'info');
        }
    }
    showMessage(message, cssClass){

        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-3`;
        div.appendChild(document.createTextNode(message));
        // show DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(function (){
            document.querySelector('.alert').remove();
        }, 3000)
    }
}

// DOM Events
document.getElementById('product-form').addEventListener('submit', function(e){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const direccion = document.getElementById('direccion').value;
    const fechasolicita = document.getElementById('fechasolicita').value;
    const fechaentrega = document.getElementById('fechaentrega').value;
    const servicio = document.getElementById('servicio').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;

    //modificar
    const product = new Product(name, email, telefono, direccion, fechasolicita, fechaentrega, servicio, price, year);

    const ui = new UI();

    if(name === '' || email ==='' || telefono === '' || direccion === '' || fechasolicita === '' || fechaentrega === '' || servicio === '' || price === '' || year === ''){
        return ui.showMessage('Por favor rellene todos los campos!', 'danger');
    }

    ui.addProduct(product);
    ui.resetForm();
    ui.showMessage('Cliente agregado con exito!', 'success');
    e.preventDefault();
});

document.getElementById('product-list').addEventListener('click', function(e) {
    const ui = new UI();
    ui.deleteProduct(e.target);
});