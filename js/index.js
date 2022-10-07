let input = document.getElementsByTagName("input")
let date = document.getElementsByClassName("card_principal-date")[0]
let current = document.getElementsByClassName("info-hours")

current[0].innerHTML = "32hrs"
current[1].innerHTML = "10hrs"
current[2].innerHTML = "4hrs"



console.log(current)

console.log(date)

date.addEventListener("change", function(){
    for (item of input) {

        if(item.checked == true){

            if(item.value == "Daily"){
                console.log("acciones dayli")
            }

            if(item.value == "Weekly"){
                console.log("acciones weekly")
            }

            if(item.value == "Monthly"){
                console.log("acciones mon")
            }
        }

        
    }}
    )





