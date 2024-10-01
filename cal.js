const display = document.getElementById('display');
const buttons = document.querySelectorAll('#buttons button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if (value === '=') {
                display.value = eval(display.value);
            
            
        } else {
            display.value += value;
        }
    });
});

console.log(a);


