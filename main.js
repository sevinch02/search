const inputEl = document.getElementById('input');
const cards = document.getElementsByClassName('card');

function search(){
    for(el of cards){
        
        if(el.innerText.includes(inputEl.value)){
          el.style.display = 'block';  
        }
        
        else {
            el.style.display = 'none'; 
        }

    }
}
inputEl.addEventListener('keyup', search)