window.onload = function() {
    
    
    var buttons = document.querySelectorAll('button');
    
    
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function() {
            
            
            var name = this.parentElement.querySelector('h2').textContent;
            var price = this.parentElement.querySelector('.price').textContent;
            
            
            alert(name + '\n' + price);
            
            
            var oldText = this.textContent;
            this.textContent = 'Добавлено';
            
            
            setTimeout(function() {
                this.textContent = oldText;
            }.bind(this), 2000);
            
        };
    }
    
};