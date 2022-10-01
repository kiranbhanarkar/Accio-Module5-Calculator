let displayxyz= document.getElementById("display")


        function isop(opxyz){
            if(opxyz === "+" || opxyz === "-" || opxyz === "*" || opxyz === "/")
                return true
            return false
        }
    function clicking(clicked){
        if(displayxyz.innerText === ""){
            if(clicked != '0'){
                displayxyz.innerText = clicked
            }
        }
        else{
            if(isop(clicked) && isop(displayxyz.innerText[displayxyz.innerText.length-1])){
                displayxyz.innerText = displayxyz.innerText.slice(0, -1)
            }
            displayxyz.innerText = displayxyz.innerText+clicked
        }
    }

   
  
    function clear1(){
        displayxyz.innerText = ""
    }

    function backspace(){
        displayxyz.innerText = displayxyz.innerText.slice(0, -1)
    }

    function evaluates(){
        try{
            displayxyz.innerText = eval(displayxyz.innerText)
        }catch(err){
            displayxyz.innerText = "ERROR"
        }
    }

