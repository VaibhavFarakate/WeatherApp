const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const tempStatus = document.getElementById("tempStatus");
const dataHide = document.querySelector(".dataToggle");
const day = document.getElementById("day");
const full_date = document.getElementById("full_date");

const now = new Date();
dateToday = now.getDate().toLocaleString();
month = now.getMonth();
Day = now.getDay();
let monthName = "";
let dayName = "";

switch (Day) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednsday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
}

switch (month) {
  case 0:
    monthName = "January";
    break;
  case 1:
    monthName = "February";
    break;
  case 2:
    monthName = "March";
    break;
  case 3:
    monthName = "April";
    break;
  case 4:
    monthName = "May";
    break;
  case 5:
    monthName = "June";
    break;
  case 6:
    monthName = "July";
    break;
  case 7:
    monthName = "August";
    break;
  case 8:
    monthName = "September";
    break;
  case 9:
    monthName = "October";
    break;
  case 10:
    monthName = "November";
    break;
  case 11:
    monthName = "December";
    break;
}

day.innerHTML = dayName;
full_date.innerHTML = `${dateToday} ${monthName}`;

const getdata = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;
  if (cityVal == "") {
    city_name.innerText = `please enter city name`;
    dataHide.classList.add("data_hide");
  } else {
    try {
      let api = `https:api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=dbd907bd55ff95f3c244f283f6b1c272
    `;
      const response = await fetch(api);
      const data = await response.json();
      const arr_data = [data];
      city_name.innerHTML = `${arr_data[0].name},${arr_data[0].sys.country}`;
      temp.innerHTML = arr_data[0].main.temp;
      const tempCondn = arr_data[0].weather[0].main;
      //   console.log(data);

      if (tempCondn == "Clear") {
        tempStatus.innerHTML = "<i class='fa fa-sun'></i>";
      } else if (tempCondn == "Clouds") {
        tempStatus.innerHTML = "<i class='fa fa-cloud'></i>";
      } else if (tempCondn == "Rain") {
        tempStatus.innerHTML = "<i class='fa fa-cloud-rain'></i>";
      } else {
        tempStatus.innerHTML = "<i class='fa fa-sun'></i>";
      }

      dataHide.classList.remove("data_hide");
    } catch {
      city_name.innerHTML = `error`;
      dataHide.classList.add("data_hide");
    }
  }
};
submitBtn.addEventListener("click", getdata);
