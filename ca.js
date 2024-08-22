const display = document.querySelector(".display");
const oo = Array.from(document.getElementsByClassName("oo"));

// console.log(oo)
oo.forEach((item) => {
    item.addEventListener("click", (ele) =>{
        switch (ele.target.innerHTML) {
            case "=":
                try {
                    display.innerHTML = eval(display.innerHTML);
                } catch (error) {
                    display.innerHTML = "Error"
                }
                break;

                case "AC":
                    display.innerHTML = 0;
                
                break;

                case "+/-":
                    display.innerHTML = - + display.innerHTML;
                
                break;

                case "%":
                    display.innerHTML = display.innerHTML / 100;
                
                break;

                
    
            default:
                if(display.innerHTML == "0") {
                    display.innerHTML = "";
                    display.innerHTML += ele.target.innerHTML;
                }else{
                    display.innerHTML += ele.target.innerHTML;
                }
                break;
        }
    });
});