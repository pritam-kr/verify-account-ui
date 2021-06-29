const enterCodes = document.querySelectorAll('#otp');

enterCodes[0].focus();

enterCodes.forEach((eachCode, index) => {
    //  console.log(eachCode, index)
    eachCode.addEventListener('keydown', (e) =>{
         console.log( e.key)
        if(e.key >= 0 && e.key <=9) {
            setTimeout(() => enterCodes[index + 1].focus(), 10) 
            enterCodes[index].value = ''
        } else if(e.key === 'Backspace'){
            setTimeout(() => enterCodes[index - 1].focus(), 10) 
        } 
    })
})