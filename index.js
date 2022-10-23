const toggle = document.querySelector('.container input')

    var button1_status = 0;
    var button2_status = 0;

    function button1_on(){
        button1_status = 1;
        console.log("LED 1 is on");
        dataSend();
    }
    function button1_off(){
        button1_status = 0;
        console.log("LED 1 is off");
        dataSend();
        
    }

toggle.addEventListener('click', () => {
    const onOFF = toggle.parentNode.querySelector('.onOff')

    onOFF.textContent = toggle.checked ? 'ON' : 'OFF'

    if(toggle.checked){
    button1_on();
    }
    else{
        button1_off();
    }

})


