document.addEventListener("DOMContentLoaded", function() {
    const myButton = document.getElementById("myButton");
    
    if (myButton) {
        myButton.addEventListener("click", function(event) {
            event.preventDefault(); 
            
            window.location.href = "page2.html";
        });
    }

});