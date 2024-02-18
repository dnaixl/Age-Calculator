let ageInput = document.getElementById("ageInput");
let consoleOutput = document.getElementById("consoleOutput");
let ages = [];

function buttonClick(number) {
    ageInput.value += number;
}

function clearInput() {
    ageInput.value = "";
    consoleOutput.textContent = "";
}

function enterAge() {
    let age = parseInt(ageInput.value);
    if (!isNaN(age)) {
        ages.push(age);
        consoleOutput.textContent += `${age}, `;
        ageInput.value = "";
    }
}

function calculateTotal() {
    let totalAge = ages.reduce((acc, curr) => acc + curr, 0);
    consoleOutput.textContent += `Total age is ${totalAge}`;
}
