$(document).ready(function(){
    "use strict"
    const content = "Hello, Click My Works to See unlimitied possibilities."
    const text = document.querySelector(".typing")
    let index = 0

    function sleep(delay){ 
        const start = new Date().getTime() 
        while (new Date().getTime() < start + delay);
        }

    function typing(){
        text.textContent += content[index++]
        if(index > content.length){
            text.textContent = ""
            index = 0
            sleep(1000)
        }
    }
    setInterval(typing, 150)
})