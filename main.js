const formInput=document.querySelector('.form__input');
const formBtns=document.querySelector('.form__btn');
const form=document.querySelector('form')
const msgParagraph=document.querySelector('.form__msg')
formBtns.addEventListener('click',checkError)

function checkError(e){
    e.preventDefault();
    if(formInput.value.trim()===''){
        setMsg("error","email mustn't be empty")
    }
    else if(!checkValid(formInput.value)){
        setMsg('error','email must be in valid form')
    }
    else{
        setMsg('valid','email has been submited');
    }
}
function checkValid(email){
     return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

}
function setMsg(type,msg){
    
   if(type==='error'){
    form.classList.remove("active-valid")
    form.classList.add("active-error")
   } 
   else if(type==='valid'){
    form.classList.remove("active-error")
    form.classList.add("active-valid")
   }
       msgParagraph.innerHTML=msg


}