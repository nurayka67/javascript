var registry = {
    counter: function(el) {
        console.log('Counter mounting...');
        var count = 0;
        var display = el.querySelector('.count');
        var incBtn = el.querySelector('.inc');
        var decBtn = el.querySelector('.dec');
        
        if (!display || !incBtn || !decBtn) {
            console.error('Counter elements not found');
            return;
        }
        
        var update = function() {
            display.textContent = count;
        };
        
        incBtn.onclick = function() { 
            count++; 
            update(); 
            console.log('Counter:', count);
        };
        
        decBtn.onclick = function() { 
            count--; 
            update(); 
            console.log('Counter:', count);
        };
        
        update();
        console.log('Counter ready');
    },
    
    color: function(el) {
        console.log('Color picker mounting...');
        var box = el.querySelector('.color-box');
        var redBtn = el.querySelector('.red');
        var blueBtn = el.querySelector('.blue');
        var greenBtn = el.querySelector('.green');
        
        if (!box || !redBtn || !blueBtn || !greenBtn) {
            console.error('Color elements not found');
            return;
        }
        
        redBtn.onclick = function() { 
            box.style.backgroundColor = 'red'; 
            console.log('Color: red');
        };
        
        blueBtn.onclick = function() { 
            box.style.backgroundColor = 'blue'; 
            console.log('Color: blue');
        };
        
        greenBtn.onclick = function() { 
            box.style.backgroundColor = 'green'; 
            console.log('Color: green');
        };
        
        console.log('Color picker ready');
    }
};

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, scanning for islands...');
    
    var islands = document.querySelectorAll('[data-island]');
    console.log('Found islands:', islands.length);
    
    islands.forEach(function(island) {
        var type = island.getAttribute('data-island');
        console.log('Mounting island type:', type);
        if (registry[type]) {
            registry[type](island);
        } else {
            console.error('Unknown island type:', type);
        }
    });
});