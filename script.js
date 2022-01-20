let weather = {
    apikey:"b01213d3fbde5e7bf70e0862968cee7a",
    fetchWeather: function(city){
      fetch(
          "https://api.openweathermap.org/data/2.5/weather?q="+city +"&units=metric&appid="+this.apikey
      )
      .then((response)=>response.json())
      .then((data)=> this.displayWeather(data));
          
  },
  displayWeather: function(data){
    const{name}=data;
    const{icon,description,id,main}=data.weather[0];
    const{temp,humidity,feels_like, temp_max,temp_min}=data.main;
    const{speed}=data.wind;
    const{country,sunrise,sunset,timezone}=data.sys;

    var sec = sunrise;
    var date = new Date(sec * 1000);
    var timestr = date.toLocaleTimeString();
    console.log(new Date(data.dt*1000-(data.timezone*1000))); // minus 
    console.log(new Date(data.dt*1000+(data.timezone*1000))); // plus
console.log(date, timestr);

    console.log(name,icon,description,temp,humidity,speed,id,main,temp_max,temp_min);
    console.log(data);
    document.querySelector(".location").innerHTML='<i class="fas fa-map-marker-alt"></i>'+" " +name+", "+ country;
    document.querySelector(".temp").innerHTML=temp+"°C";
    document.querySelector(".tempFeels").innerHTML ="Feels Like: "+ feels_like+"°C";
    document.querySelector(".max-min").innerHTML = description + " | "+ "Wind: " + speed +"Kmph";
    if(description === 'rain' || description === 'shower rain' ){
        document.querySelector(".weatherIcon").innerHTML = '<i class="fas fa-cloud-rain"></i>';
        $(".weatherIcon").css("color","#ecf0f1");
    }
    
    else if(description ==='clear sky')
    {
        document.querySelector(".weatherIcon").innerHTML = '<i class="fas fa-sun sunny"></i> ';
    }

    else if(description ==='clear sky' )
    {
        document.querySelector(".weatherIcon").innerHTML = '<i class="fas fa-sun sunny"></i> ';
    }

    else if(description === 'mist' || description === 'haze')
    {
        document.querySelector(".weatherIcon").innerHTML = '<i class="fas fa-smog"></i> '; 
        $(".weatherIcon").css("color","#ecf0f1");
    }
    
    else if(description ==='snow')
    {
        document.querySelector(".weatherIcon").innerHTML = '<i class="far fa-snowflake"></i>';
        $(".weatherIcon").css("color","#ecf0f1");
    }
    
    else
    {
        document.querySelector(".weatherIcon").innerHTML = '<i class="fas fa-cloud"></i> ';
        $(".weatherIcon").css("color","#ecf0f1");
    }
    
  },

    search:function(){
        this.fetchWeather(document.querySelector(".cityInput").value);
}
};

document.querySelector(".cityInput").addEventListener("keydown",function(event){
    if(event.key=="Enter"){
        weather.search();
    }
});

weather.fetchWeather("Jamshedpur");