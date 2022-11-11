// Variables**************************
const form = document.forms.form;
console.log(form)

const quantity = document.getElementById("cantidadTickets");
console.log(cantidadTickets);

const category = document.getElementById("selectionCategory");
console.log(selectionCategory);

const totalBuy = document.getElementById("totalBuy");
console.log(totalBuy);

const btnDeleted = document.getElementById("btnBorrar");
console.log(btnBorrar);

const resumen = document.getElementById("btnResumen");
console.log(btnResumen);

//Eventos
let botonBorrar = document.getElementById('btnBorrar');
botonBorrar.addEventListener("click", borrarForm);

let botonResumen = document.getElementById('btnResumen');
botonResumen.addEventListener("click", ticketsTotal);


// Validar Formulario*********************

function validarForm() {
    let inputForm = []
    form.firstName.value === ''
        ? form.firstName.classList.add('border-danger')   
        : form.firstName.classList.remove('border-danger')
    form.lastName.value === ''
        ? form.lastName.classList.add('border-danger')   
        : form.lastName.classList.remove('border-danger')
    form.email.value === ''
        ? form.email.classList.add('border-danger')   
        : form.email.classList.remove('border-danger')
    form.cantidadTickets.value === ''
        ? form.cantidadTickets.classList.add('border-danger')   
        : form.cantidadTickets.classList.remove('border-danger')
}



//Funcion Resumen*************************


function ticketsTotal(e) {
    e.preventDefault();
    let cantidadTickets = document.getElementById('cantidadTickets');
    if (Number(cantidadTickets.value)) { 
        let selectionCategory = document.getElementById('selectionCategory');
        let totalBuy;
        switch (selectionCategory.value){
            case "valueEstudiante": {
                totalBuy = 200 * cantidadTickets.value * 0.2;
                break;
            }
            case "valueTrainee": {
                totalBuy = 200 * cantidadTickets.value * 0.5;
                break;
            }
            case "valueJunior": {
                totalBuy = 200 * cantidadTickets.value * 0.85;
                break;
            }
        }
        document.getElementById('totalBuy').textContent = `Total a Pagar: $${totalBuy}`;
    }  
    validarForm()
}


//Funcion boton BORRAR**********************

function borrarForm(e) {
    e.preventDefault()
    form.firstName.value = ''
    form.lastName.value = ''
    form.email.value = ''
    form.cantidadTickets.value = ''
    form.selectionCategory.value = ''
}

function borrarForm() {
    form.firstName.classList.replace('border-danger', 'default');
    form.lastName.classList.replace('border-danger', 'default');
    form.email.classList.replace('border-danger', 'default');
    form.cantidadTickets.classList.replace('border-danger', 'default');
    document.getElementById('totalBuy').textContent = `Total a Pagar: $${''}`;
}   
