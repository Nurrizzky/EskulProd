let input = document.querySelector(".city");
let button = document.querySelector("#button");

function returnData() {
   fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" + input.value + "&appid=28afea01a7391bb69ba3b49a5db6c19f&units=metric"
   )
   .then((response) => {
      if (!response.ok) {
         throw new Error("City not found");
      }
      return response.json();
   })
   .then((response) => {
      let data = document.querySelector(".result");
      console.log("berhasil");
   })
   .catch((error) => {
      let data = document.querySelector(".result");
      data.innerHTML = `<h2>${error.message}</h2>`;
   });
};
