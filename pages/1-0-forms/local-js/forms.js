
document.addEventListener('DOMContentLoaded', () => {

    const input = document.querySelector('.input');
    const code  = document.querySelector('.code');
    const submit = document.querySelector('.submit');

    const cs = code.style;

    input.disabled = false;
    code.disabled = false;
    submit.disabled = true;

    input.onkeyup = () => {
        input.style.opacity = `${100-input.value.length*10}%`
        if(input.value.length >= 10){
            input.disabled = true;
        }
    }
 

    code.onkeyup = () => {

        cs.transition =  `140ms`
        cs.transform = `rotate(${-2*code.value.length}deg)`
        
        if(code.value.length >= 10){
            cs.transition = `1.5s`
            code.disabled = true;
            cs.transform = `translateY(60vh) rotate(-90deg)`
            cs.transitionTimingFunction = `cubic-bezier(.44,-0.02,.84,.43)`; 
        };       
        
        if(code.value.length >= 10){
            submit.disabled = false;
            submit.style.cursor = `help`;
        } else {
            submit.cursor = "pointer";
            submit.disabled = true;
        };
        
    }

    document.querySelector('form').onsubmit = () => {
        submit.disabled = true;
        return false
    }
});