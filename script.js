let ageInput = document.getElementById("ageInput");
let consoleOutput = document.getElementById("consoleOutput");
let ages = [];

function buttonClick(number) {
    ageInput.value += number;
}

function clearInput() {
    ageInput.value = "";
    consoleOutput.textContent = "";
    ages = [];
}

function enterAge() {
    let age = parseInt(ageInput.value);
    if (!isNaN(age)) {
      if (age > 150) {
        consoleOutput.textContent += "Error: Age cannot be greater than 150\n";
      } else {
        ages.push(age);
        consoleOutput.textContent += `${age}, `;
      }
      ageInput.value = ""; 
    }
  }

function calculateTotal() {
    let totalAge = ages.reduce((acc, curr) => acc + curr, 0);
    consoleOutput.textContent += `Total age is ${totalAge}`;
}


function changeBackground() {
    let images = [
        'https://images.unsplash.com/photo-1699755094450-620e32ec86a6?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1705517649861-5450dc4dd44a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1706463661223-4e7007549823?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1707497009301-78bed8b1a51d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ];

    let randomIndex = Math.floor(Math.random() * images.length);
    document.body.style.backgroundImage = `url(${images[randomIndex]})`;
}

