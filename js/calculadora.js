const display = document.getElementById('display');
const keypad = document.querySelector('.keypad');
const operators = document.querySelectorAll('.operator');
const equalsButton = document.getElementById('equals');

// Criar botões numéricos
for (let i = 0; i <= 9; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.addEventListener('click', () => {
        display.value += i;
        tocarSom(); // Chamar a função para reproduzir o som
    });
    keypad.appendChild(button);
}

// Adicionar botão de vírgula
const commaButton = document.createElement('button');
commaButton.textContent = ',';
commaButton.addEventListener('click', () => {
    if (!display.value.includes(',')) { 
        display.value += ',';
    }
    tocarSom(); // Chamar a função para reproduzir o som
});
keypad.appendChild(commaButton);

// Adicionar botão "C"
const clearButton = document.createElement('button');
clearButton.textContent = 'C';
clearButton.addEventListener('click', () => {
    display.value = '';
    firstOperand = null;
    currentOperator = null;
    tocarSom(); // Chamar a função para reproduzir o som
});

// Lógica para operadores e igual
let currentOperator = null;
let firstOperand = null;

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (display.value === '') return; 

        if (currentOperator) {
            // Se já houver um operador, calcular o resultado parcial
            equalsButton.click(); 
        }

        firstOperand = display.value; 
        currentOperator = operator.textContent;
        display.value += currentOperator; 
        tocarSom(); // Chamar a função para reproduzir o som
    });
});

equalsButton.addEventListener('click', () => {
    if (firstOperand === null || currentOperator === null || display.value === '') return;

    const secondOperand = parseFloat(display.value.replace(',', '.').split(currentOperator)[1]);

    if (currentOperator === '/' && secondOperand === 0) {
        display.value = 'Erro: Divisão por zero';
        return;
    }

    let result;
    switch (currentOperator) {
        case '+': result = parseFloat(firstOperand) + secondOperand; break;
        case '-': result = parseFloat(firstOperand) - secondOperand; break;
        case 'x': result = parseFloat(firstOperand) * secondOperand; break;
        case '÷': result = parseFloat(firstOperand) / secondOperand; break;
    }

    if (Number.isInteger(result)) {
        display.value = result; 
    } else {
        display.value = result.toFixed(2); 
    }
    firstOperand = result; 
    currentOperator = null; 

    tocarSom(); // Chamar a função para reproduzir o som
});

// Função para tocar o som (centralizada para facilitar a manutenção)
function tocarSom() {
    const clickSound = document.getElementById('clickSound');
    clickSound.currentTime = 0; // Reinicia o som
    clickSound.play();
}

keypad.appendChild(clearButton); 
