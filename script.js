const weather = document.getElementById("weather");
const input = document.getElementById("field");

const apiKey = "e3a9eee8b393b2db41909c973157062a";

async function getWeather() {

    const city = input.value.trim();
    if(!city){
        alert("Enter a city name!");
        return;
    }

    try {
        const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
        const data = await res.json();

        /*console.log(data);
        console.log(data.name);
        console.log(data.main.temp);
        console.log(data.weather[0].description);
        console.log(data.wind.speed);*/

        const name = data.name;
        const temp = data.main.temp;
        const description = data.weather[0].description;
        const wind = data.wind.speed;
        const table = [name,temp,description,wind];

        console.log(table);
        let index = 0;
        weather.querySelectorAll("div").forEach(div => {
            div.innerHTML = table[index];
            index += 1;
        })
        
    } catch (error) {
        console.log(error);
    }

    
}
