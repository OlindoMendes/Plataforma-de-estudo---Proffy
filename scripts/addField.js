//Procurar o botão
document.querySelector("#add-time")
//Quando clicar no botão
.addEventListener('click', cloneField)

// Executar uma ação
const cloneField = () => {
    //Duplicar campos. Quais campos??
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)//boolean: true or false

    //Pegar cada campo, limpar
    fields.forEach((field)=> {
        //Pega o field do momento e limpa ele
        field.value =""
            
    });

    //Colocar na página: one??
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}