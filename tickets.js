// Variables**************************
const studentDiscount = document.querySelector(".student")
const traineeDiscount = document.querySelector(".trainee")
const juniorDiscount= document.querySelector(".junior")

console.log(studentDiscount)
console.log(traineeDiscount)
console.log(juniorDiscount)

const form = document.forms.form;
console.log(form)

const amount = document.getElementById("amountOfTickets");
console.log(amountOfTickets);

const category = document.getElementById("selectionCategory");
console.log(selectionCategory);

const totalBuy = document.getElementById("totalBuy");
console.log(totalBuy);

const deletedAll = document.getElementById("deleteButton");
console.log(deleteButton);

const summary = document.getElementById("summaryButton");
console.log(summaryButton);


// Validar Formulario*********************

function validateForm() {
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
    form.amountOfTickets.value === ''
        ? form.amountOfTickets.classList.add('border-danger')   
        : form.amountOfTickets.classList.remove('border-danger')
}


//Funcion Resumen*************************


function totalTickets(e) {
    e.preventDefault();
    let amountOfTickets = document.getElementById('amountOfTickets');
    if (Number(amountOfTickets.value)) { 
        let selectionCategory = document.getElementById('selectionCategory');
        let totalBuy;
        switch (selectionCategory.value){
            case "valueStudent": {
                totalBuy = 200 * amountOfTickets.value * 0.2;
                break;
            }
            case "valueTrainee": {
                totalBuy = 200 * amountOfTickets.value * 0.5;
                break;
            }
            case "valueJunior": {
                totalBuy = 200 * amountOfTickets.value * 0.85;
                break;
            }
        }
        document.getElementById('totalBuy').textContent = `Total a Pagar: $${totalBuy}`;
    }  
    validateForm()
}

let summaryEvent = document.getElementById('summaryButton');
summaryEvent.addEventListener("click", totalTickets);


//Funcion boton BORRAR**********************

function deleteForm(e) {
    e.preventDefault()
    form.firstName.value = ''
    form.lastName.value = ''
    form.email.value = ''
    form.amountOfTickets.value = ''
    form.selectionCategory.value = ''
}

function deleteForm() {
    form.firstName.classList.replace('border-danger', 'default');
    form.lastName.classList.replace('border-danger', 'default');
    form.email.classList.replace('border-danger', 'default');
    form.amountOfTickets.classList.replace('border-danger', 'default');
    document.getElementById('totalBuy').textContent = `Total a Pagar: $${''}`;
}   

let buttonDeleted = document.getElementById('deleteButton');
buttonDeleted.addEventListener("click", deleteForm);
