// let resultElement = querySelector('.result');
let mainContainer = document.querySelector('.main-container')
let rowId = 1;

let word = 'texto';
let wordArray = word.toUpperCase().split('');
console.log(wordArray)

let actualRow = document.querySelector('.row');



wordArray.forEach((item, index) => {
    if(index === 0){
        actualRow.innerHTML += `<input type="text" maxlength="1" class="square focus">`
    }else{
        actualRow.innerHTML += `<input type="text" maxlength="1" class="square">`
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

            // Cambiar estilos si existe la letra pero no esta en la posicion correcta 
            let existIndexArray = existLetter(wordArray, userInput)
            console.log(existIndexArray)
             existIndexArray.forEach(element =>{
                squares[element].classList.add('gold');
            });

            // Comparar arreglos para cambiar estilos
           let rightIndex =  compareArrays(wordArray, userInput)
           console.log(rightIndex)
           rightIndex.forEach(element => {
            squares[element].classList.add('green');
           })
        //    Si los arreglos son iguales

        if(rightIndex.length == wordArray.length){
            resultElement.innerHTML = `
            <p>You Win!</p>
            <button class="button">Restart</button>`
        }

        // Crear una nueva linea
        

        // let resetBtn = document.querySelector('.button')
        // resetBtn.addEventListener('click', ()=>{
        //     location.reload();
        // });


        // Crear una linea
        let actualRow = createRow()
        drawSquares(actualRow)


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

function existLetter(array1, array2){
    let existIndexArray = [];
    array2.forEach((element, index)=>{
        if(array1.includes(element)){
            existWordsArray.push(index)
        }
    });
    return existIndexArray;
}

function createRow(){
    rowId++
    let newRow = document.createElement('div');
    newRow.classList.add('row');
    newRow.setAttribute('id', 'rowId')
    mainContainer.appendChild(newRow)
    return newRow;
}

function drawSquares(actualRow){
    wordArray.forEach((item, index) => {
        if(index === 0){
            actualRow.innerHTML += `<input type="text" maxlength="1" class="square focus">`
        }else{
            actualRow.innerHTML += `<input type="text" maxlength="1" class="square">`
        }
    });
}
