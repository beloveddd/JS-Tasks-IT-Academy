const buttons = document.getElementsByTagName("button");

for (let i = 0; i < buttons.length; i++) {
    let counter = (function (count = 1) {
        return function() {
            
            return count++;
            
        }
    })();
    buttons[i].onclick = function() {
        buttons[i].innerHTML = counter();
    }
}



