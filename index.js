var a = document.getElementById("a");
var b = document.getElementById("b");
var hypo = document.getElementById("hypo");
var hypoOutput = document.getElementById("hyporesult")


hypo.addEventListener("click",()=>{
    var inputA =a.value;
    var inputB = b.value;
    if(inputA.length>0 && inputB.length>0){
        var sol = Math.sqrt(((inputA*inputA)+(inputB*inputB))).toFixed(2);
        hypoOutput.innerHTML = "c = " + sol;
    }else{
        hypoOutput.innerHTML = "Invalid inputs. Please fill all the fields";
    }
    
})

