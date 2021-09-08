let val= document.getElementById('val');
buttons= document.querySelectorAll('button');
let sValue='';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText=e.target.innerText;
        
        if(buttonText=='AC'){
            sValue=" ";
            val.value=sValue;
        }
        else if(buttonText=='='){
            val.value=eval(sValue);
        
        }
        else{
            sValue+=buttonText;
            val.value=sValue;
        }

    })
}