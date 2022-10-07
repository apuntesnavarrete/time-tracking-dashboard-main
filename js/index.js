let input = document.getElementsByTagName("input")
let date = document.getElementsByClassName("card_principal-date")[0]

console.log(date)

date.addEventListener("change", function(){
    for (item of input) {
        console.log(item);

        console.log(item.checked);
    }}
    )





