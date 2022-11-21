let word = 'texto';
let wordArray = word.toUpperCase().split('');
console.log(wordArray)

let actualRow = document.querySelector('.row');

wordArray.forEach((item, index) => {
    if(index === 0){
        actualRow.innerHTML += `
        <input type="text" maxlength="1" class="square focus"> 
        `
    }else{
        actualRow.innerHTML += `
        <input type="text" maxlength="1" class="square"> 
        `
    }
});

let focusElement = document.querySelector('.focus')
console.log(focusElement)
focusElement.focus();

let squares = document.querySelectorAll('.square');
squares = [...squares];


let userInput = []

squares.forEach(element => {
    element.addEventListener('input', event=>{
        //Recoger el ingreso del usuario
        userInput.push(event.target.value.toUpperCase())
        console.log(userInput)
        if(event.target.nextElementSibling){
            event.target.nextElementSibling.focus();
        }else{
            // Comparar arreglos para cambiar estilos
           let rightIndex =  compareArrays(wordArray, userInput)
           console.log(rightIndex)
           rightIndex.forEach(element => {
            squares[element].classList.add('green');
           })
        //    Crear una nueva linea 
        }
    });
})

//Funciones

function compareArrays(array1, array2){
    let iqualsIndex = []
    array1.forEach((element, index)=>{
        if(element == array2[index]){
            console.log('En la posicion ${index} si son iguales');
            iqualsIndex.push(index);
        }else{
            console.log('En la posicion ${index} NO son iguales');
        }
    });
    return iqualsIndex;
}
