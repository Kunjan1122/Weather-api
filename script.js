const apiKey = "2dc67e1094e038ffe9eabbe83a447367";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchBox= document.querySelector(".search input");
        const searchBtn= document.querySelector(".search button");
        const weatherIcon=document.querySelector(".weather-icon");
        const errorDiv = document.querySelector(".error");
        const weatherDiv = document.querySelector(".weather");


async function checkWeather(city){
    const response = await fetch(apiUrl+ city + `&appid=${apiKey}`);
    if(response.status==404){
        errorDiv.style.display="block";
        weatherDiv.style.display="none";
    }else{
        const data = await response.json();
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed +" km/h";
    if(data.weather[0].main =="Clouds"){
        weatherIcon.src = "Images/clouds.png"
    }else if(data.weather[0].main =="Clear"){
        weatherIcon.src = "Images/clear.png"
    }else if(data.weather[0].main =="Rain"){
        weatherIcon.src = "Images/rain.png"
    }else if(data.weather[0].main =="Drizzle"){
        weatherIcon.src = "Images/drizzle.png"
    }else if(data.weather[0].main =="Mist"){
        weatherIcon.src = "Images/mist.png"
    }
    weatherDiv.style.display = "block";
    errorDiv.style.display="none";
}

    }
    searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})   