let val= document.getElementById('val');
buttons= document.querySelectorAll('button');
let sValue='';
let p="undefined";
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText=e.target.innerText;
        console.log(buttonText);
        if(buttonText=='*'){
            sValue +=buttonText;
            val.value = sValue;
        }
        else if(buttonText=='AC'){
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