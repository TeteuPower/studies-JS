const display = document.getElementById('display');
const keypad = document.querySelector('.keypad');
const operators = document.querySelectorAll('.operator');
const equalsButton = document.getElementById('equals');

// Criar botões numéricos
for (let i = 0; i <= 9; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.addEventListener('click', () => display.value += i);
    keypad.appendChild(button);
}

// Adicionar botão de vírgula
const commaButton = document.createElement('button');
commaButton.textContent = ',';
commaButton.addEventListener('click', () => {
    if (!display.value.includes(',')) { // Verificar se já existe uma vírgula
        display.value += ',';
    }
});
keypad.appendChild(commaButton);

// Adicionar botão "C"
const clearButton = document.createElement('button');
clearButton.textContent = 'C';
clearButton.addEventListener('click', () => {
    display.value = '';
    firstOperand = null;
    currentOperator = null;
});

// Lógica para operadores e igual
let currentOperator = null;
let firstOperand = null;

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (display.value === '') return; // Evitar operar com display vazio

        firstOperand = display.value; // Armazenar como string
        currentOperator = operator.textContent;
        display.value = '';
    });
});

equalsButton.addEventListener('click', () => {
    if (firstOperand === null || currentOperator === null || display.value === '') return;

    // Converter para float apenas antes do cálculo
    const firstOperandFloat = parseFloat(firstOperand.replace(',', '.'));
    const secondOperand = parseFloat(display.value.replace(',', '.')); 

    if (currentOperator === '/' && secondOperand === 0) {
        display.value = 'Erro: Divisão por zero';
        return;
    }

    let result;
    switch (currentOperator) {
        case '+': result = firstOperandFloat + secondOperand; break;
        case '-': result = firstOperandFloat - secondOperand; break;
        case 'x': result = firstOperandFloat * secondOperand; break;
        case '÷': result = firstOperandFloat / secondOperand; break;
    }

    // Verificar se o resultado é inteiro
    if (Number.isInteger(result)) {
        display.value = result; // Exibir como inteiro
    } else {
        display.value = result.toFixed(2); // Exibir com 2 casas decimais
    }
    firstOperand = result; // Armazenar resultado para próximas operações
    currentOperator = null; 
});

keypad.appendChild(clearButton); 
