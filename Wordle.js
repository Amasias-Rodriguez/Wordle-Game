let resultElement = querySelector('.result');
let mainContainer = document.querySelector('.main-container')
let rowId = 1;
//Peticion API
let word = 'texto';
let wordArray = word.toUpperCase().split('');
console.log(wordArray)

let actualRow = document.querySelector('.row')



drawSquares(actualRow);
listenInput(actualRow)
addFocus(actualRow)

function listenInput(actualRow){
    let squares = actualRow.querySelectorAll('.square');
    squares = [...squares];


    let userInput = []

    squares.forEach(element => {
    element.addEventListener('input', event=>{
        //Si no se ha borrado
        if(event.inputType !== 'deleteContentBackward'){
            //Recoger el ingreso del usuario
        userInput.push(event.target.value.toUpperCase())
        console.log(userInput)
        if(event.target.nextElementSibling){
            event.target.nextElementSibling.focus();
        }else{
            //Crear arreglo con las letras
            let squaresFilled = actualRow.querySelectorAll('.square');
            squaresFilled = [...squaresFilled]
            let lastFiveSquaresFilled = squaresFilled.slice(-5);
            let finalUserInput = [];
            lastFiveSquaresFilled.forEach(element => {
                finalUserInput.push(element.value.toUpperCase)
            });


            // Cambiar estilos si existe la letra pero no esta en la posicion correcta 
            let existIndexArray = existLetter(wordArray, finalUserInput)
            console.log(existIndexArray)
             existIndexArray.forEach(element =>{
                squares[element].classList.add('gold');
            });

            // Comparar arreglos para cambiar estilos
           let rightIndex =  compareArrays(wordArray, finalUserInput)
           console.log(rightIndex)
           rightIndex.forEach(element => {
            squares[element].classList.add('green');
           })


        //    Si los arreglos son iguales

        if(rightIndex.length == wordArray.length){
            showResult('You Win!')

            return;
        }

        // Crear una nueva linea
        let actualRow = createRow()
        if(!actualRow){
            return
        }
        drawSquares(actualRow)
        listenInput(actualRow)
        addFocus(actualRow)

        }
        }else{
            userInput.pop();
        }
        console.log(userInput)
    });
})
}



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
    if (!rowId <= 5){
        let newRow = document.createElement('div');
        newRow.classList.add('row');
        newRow.setAttribute('id', 'rowId')
        mainContainer.appendChild(newRow)
        return newRow;  
    }else{
        showResult('Try Again')
    }
    
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

function addFocus(actualRow){
    let focusElement = actualRow.querySelector('.focus')
    console.log(focusElement)
    focusElement.focus();
}

function showResult(textMsg){
    resultElement.innerHTML = `
    <p>${textMsg}</p>
    <button class="button">Restart</button>`

    let resetBtn = document.querySelector('.button')
    resetBtn.addEventListener('click', ()=>{
        location.reload();
    });
}
