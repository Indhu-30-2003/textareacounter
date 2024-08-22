document.addEventListener("DOMContentLoaded",function(){
    var msg=document.getElementById("msg")
    var charcounter=document.getElementById("charcounter")
    var warning=document.getElementById("warning")
    var maxLength=msg.getAttribute("maxlength")
    msg.addEventListener("input",function(){
         var currentlength=msg.value.length
         charcounter.textContent=`${currentlength}/${maxLength} characters`
         if (currentlength >= maxLength) {
            warning.classList.remove("hidden");
        } else {
            warning.classList.add("hidden");
        }
    })
})