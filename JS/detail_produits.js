
(() => {
    let max_length = 200;
    let textarea = document.getElementById("user-text");
    // set attribute max length 
    textarea.setAttribute("maxlength", max_length);

    textarea.addEventListener("input", function() {
        let value_length = this.value.length;
        if (value_length > max_length) {  
            this.value = this.value.substring(0, max_length);
            value_length = this.value.length;
        }  
        document.getElementById("char-length").innerText = "Characters restant "+(max_length - value_length);
    });

})();