const url = 'https://api.openweathermap.org/data/2.5/weather?q=dubai&units=metrics&appid=05b2a1d9770fe84ac37fded20630cab7';

let city ;

const weatherBackgrounds = {
    Clear: "images/sunny.jpg",
    Clouds: "images/cloudy.jpg",
    Rain: "images/rainy.jpg",
    Haze: "images/Haze.jpg",
    Mist: "images/mist.jpg"
    //Scattered:"images/scattered_clouds.jpg"
    // Add more conditions and corresponding image URLs here
  };

document.getElementById('search').onclick = ()=>{
    city = document.getElementById('searchbar').value
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metrics&appid=05b2a1d9770fe84ac37fded20630cab7')
        .then((response)=> response.json())
        .then((data)=>{
            console.log(data)
            document.getElementById('h2').innerHTML = 'Weather in  '+ data.name;

            document.getElementById('temp').innerHTML = Math.round(data.main.temp- 273.15) + '<sup>o</sup> C';

            document.getElementById('weather1').innerHTML = data.weather[0].description.toUpperCase();

            document.getElementById('weather2').innerHTML ='Humidity : ' + data.main.humidity

            document.getElementById('weather3').innerHTML ='Wind Speed : ' + data.wind.speed

            document.getElementById('img').src = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

              // Update background image based on weather condition
            const weatherCondition = data.weather[0].main;
            const backgroundUrl = weatherBackgrounds[weatherCondition];

            if (backgroundUrl) {
                document.body.style.backgroundImage = `url(${backgroundUrl})`;
            }
        })
}
let input = document.querySelector('input') 
input.addEventListener('keypress',(event)=>{
    if(event.key == 'Enter')
    city = document.getElementById('searchbar').value
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metrics&appid=05b2a1d9770fe84ac37fded20630cab7')
        .then((response)=> response.json())
        .then((data)=>{
            console.log(data)
            document.getElementById('h2').innerHTML = 'Weather in  '+ data.name;

            document.getElementById('temp').innerHTML = Math.round(data.main.temp- 273.15) + '<sup>o</sup> C';

            document.getElementById('weather1').innerHTML = data.weather[0].description.toUpperCase();

            document.getElementById('weather2').innerHTML ='Humidity : ' + data.main.humidity

            document.getElementById('weather3').innerHTML ='Wind Speed : ' + data.wind.speed

            document.getElementById('img').src = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

              // Update background image based on weather condition
            const weatherCondition = data.weather[0].main;
            const backgroundUrl = weatherBackgrounds[weatherCondition];

            if (backgroundUrl) {
                document.body.style.backgroundImage = `url(${backgroundUrl})`;
            }
        })
})

  