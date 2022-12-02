let textarea = document.getElementById("text");
let result = document.getElementById("result");
let select = document.getElementById("select");
textarea.addEventListener("input",()=>{
    makrzsult();
});
select.addEventListener("change",()=>{
    makrzsult();
}) 
function makrzsult(){
    if(select.value == "decode"){
        result.value = window.atob(textarea.value);

    }else{
        result.value = window.btoa(textarea.value);
    }
        
    
}