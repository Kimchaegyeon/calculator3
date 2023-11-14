document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.getElementById('buttons');

    buttons.addEventListener('click', function(e) {
        if (e.target.matches('button')) {
            const buttonText = e.target.textContent;

            if (buttonText === '=') {
                try {
                    display.textContent = eval(display.textContent);
                } catch (error) {
                    display.textContent = 'Error';
                }
            } else {
                display.textContent += buttonText;
            }
        }
    });

    document.getElementById('zero').addEventListener('click', function() {
        if (display.textContent !== '0') {
            display.textContent += '0';
        }
    });

    document.getElementById('equals').addEventListener('click', function() {
        try {
            display.textContent = eval(display.textContent);
        } catch (error) {
            display.textContent = 'Error';
        }
    });
});
