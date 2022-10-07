let input = document.getElementsByTagName("input");
let date = document.getElementsByClassName("card_principal-date")[0];
let current = document.getElementsByClassName("info-hours");
let previous = document.getElementsByClassName("info-total_hours");
let info = document.getElementsByClassName("info_type");

fetch(
  "https://apuntesnavarrete.github.io/time-tracking-dashboard-main/data.json"
)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < current.length; i++) {
      current[i].innerHTML = data[i].timeframes.weekly.current + "hrs";
      previous[i].innerHTML =
        "Last Week - " + data[i].timeframes.weekly.previous + "hrs";
      info[i].innerHTML = data[i].title;
    }

    date.addEventListener("change", function () {
      for (item of input) {
        if (item.checked == true) {
          if (item.value == "Daily") {
            for (let i = 0; i < current.length; i++) {
              current[i].innerHTML = data[i].timeframes.daily.current + "hrs";
              previous[i].innerHTML =
                "Last Week - " + data[i].timeframes.daily.previous + "hrs";
            }

            console.log("acciones dayli");
          }

          if (item.value == "Weekly") {
            for (let i = 0; i < current.length; i++) {
              current[i].innerHTML = data[i].timeframes.weekly.current + "hrs";
              previous[i].innerHTML =
                "Last Week - " + data[i].timeframes.weekly.previous + "hrs";
            }

            console.log("acciones weekly");
          }

          if (item.value == "Monthly") {
            for (let i = 0; i < current.length; i++) {
              current[i].innerHTML = data[i].timeframes.monthly.current + "hrs";
              previous[i].innerHTML =
                "Last Week - " + data[i].timeframes.monthly.previous + "hrs";
            }
            console.log("acciones mon");
          }
        }
      }
    });
  });
