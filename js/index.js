let input = document.getElementsByTagName("input")
let date = document.getElementsByClassName("card_principal-date")[0]
let current = document.getElementsByClassName("info-hours")




fetch('https://apuntesnavarrete.github.io/time-tracking-dashboard-main/data.json')
  .then(response => response.json())
  .then(data => {

    for (let i = 0; i < current.length; i++) {
        current[i].innerHTML = data[i].timeframes.weekly.current + "hrs"

    }
   

  date.addEventListener("change", function(){
    for (item of input) {

        if(item.checked == true){

            if(item.value == "Daily"){
                for (let i = 0; i < current.length; i++) {
                    current[i].innerHTML = data[i].timeframes.daily.current + "hrs"

                }

                console.log("acciones dayli")
            }

            if(item.value == "Weekly"){

                for (let i = 0; i < current.length; i++) {
                    current[i].innerHTML = data[i].timeframes.weekly.current + "hrs"

                }


                console.log("acciones weekly")
            }

            if(item.value == "Monthly"){
                for (let i = 0; i < current.length; i++) {
                    current[i].innerHTML = data[i].timeframes.monthly.current + "hrs"

                }
                console.log("acciones mon")
            }
        }

        
    }
  })
    

    for (let i = 0; i < data.length; i++) {
        console.log(`ciclo card numero.- ${i}`)
        console.log(data[i].title)
        console.log(data[i].timeframes)
        console.log(data[i].timeframes.daily)
        console.log(data[i].timeframes.daily.current)
        console.log(data[i].timeframes.daily.previous)
    }



  });





    function checarInput(){
       
    }




