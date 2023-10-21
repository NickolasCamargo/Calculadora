const preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const slider = document.getElementById('slider');

const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

slider.addEventListener('click', ()  => {
    let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setTheme(switchToTheme);
});

setTheme(localStorage.getItem('theme') || preferedColorScheme);
let currentInput =''; 
    let display = document.getElementById ('display') 
 
    function appendToDisplay (value) 
    { 
        currentInput += value;  
        display.value = currentInput; 
    } 
 
    function clearDisplay () 
    { 
        currentInput = '';  
        display.value = ''; 
    } 

    function deleteLastCharacter() 
    {
        currentInput = currentInput.slice(0, -1); // Elimina el último carácter de la cadena
        display.value = currentInput; // Actualiza el valor en el display
    }

    function calculatePercentage() {
        try {
          const result = eval(currentInput) / 100; // Divide la expresión por 100 para obtener el porcentaje
          display.value = result; // Muestra el resultado en el display
          currentInput = result.toString(); // Convierte el resultado en una cadena y lo almacena
        } catch (error) {
          display.value = 'error'; // En caso de que el usuario haga alguna operación errónea, muestra un error en el display
        }
    }

    // Funcion  para calcular el resultado de la exprecion ingresada por el usuario  
    function calculateResult (){ 
        try { 
            const result = eval(currentInput);// Evalua el resultado de la expresion y guarda el resultado  
            display.value = result; // Muestra el resultado en el display 
            currentInput = result.toString(); // Convierte el resultado en una CADENA  y lo almacena  
 
        } catch (error) { 
            display.value =' error'; // En caso del que el usuario haga alguna operacion erronea muestra un error en el display  
        } 
             
    } 
   