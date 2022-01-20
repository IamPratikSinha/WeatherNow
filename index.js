
     



const currDate = document.getElementById("currentDate");
let weatherIcon = document.getElementById("weatherIcon");

const getCurrentDay = ( )=>{
    const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    let currentTime = new Date();
    let day = weekday[currentTime.getDay()];
    return day;
}

const getCurrentTime = () =>{
    const arrMonth = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
    var currentTime = new Date();
    var month = currentTime.getMonth();
    var day = currentTime.getDate();
    var hours = currentTime.getHours();
    var mins = currentTime.getMinutes();
    var period = "AM";
    if(hours > 11)
    {
        period ="PM"; 
        if(hours > 12 )
        {
            hours = hours - 12;
        }
    }

    if(mins < 10)
    {
        mins = "0" + mins;
    }
    console.log(day +" " + arrMonth[month] );
    if((hours >=7 && period=="PM") || (hours < 5 && period == "AM"))
    {
        console.log("Night");
        // document.querySelector(".box").innerHTML ="<style ='background: grey'>";
        $(".box").css("background-color","#2c3e50");
        
    }
    return `${day} ${ arrMonth[month]} | ${hours}:${mins} ${period}`
}
  //;
  currDate.innerHTML = getCurrentDay() + " | "+getCurrentTime();


   
    // displayWeather: function(data){
    //     const{name}=data;
    //     const{icon,description,id,main}=data.weather[0];
    //     const{temp,humidity}=data.main;
    //     const{speed}=data.wind;
        
    //     console.log(name,icon,description,temp,humidity,speed,id,main);
        // document.querySelector(".location").innerHTML=name;
        // document.querySelector(".temp").innerHTML=temp+"°C";
        // document.querySelector(".humidity").innerHTML="Humidity: "+humidity+"%";
        // document.querySelector(".windspeed").innerHTML="Wind Speed: "+speed+" km/hr";
        // const imageURL="https://openweathermap.org/img/wn/"+icon+"@2x.png";
        // document.querySelector(".weather-icon").src=imageURL;
        // document.querySelector(".desc").innerHTML="<h2>"+description+"</h2";
        // document.querySelector(".weather").classList.remove("loading");
        // if(id===800){
        //     document.body.style.backgroundImage="url('Images/"+icon+".jpg')";
        // }
        // else if (id >= 200 && id <= 232){
        //     document.body.style.backgroundImage="url('Images/"+main+".jpg')";
        // }else if(id >= 300 && id <= 321 || id >= 500 && id <= 531){
        //     document.body.style.backgroundImage="url('Images/rainy.jpg')";
        // }
        // else if (id >= 600 && id <= 622){
        //     document.body.style.backgroundImage="url('Images/"+main+".jpg')";
        
        // }else if (id >= 701 && id <= 781 ){
        //     document.body.style.backgroundImage="url('Images/Haze.jpg')";
        // }else if (id >= 801 && id <= 804){
        //     if(icon.charAt(icon.length-1)==='d')
        //         document.body.style.backgroundImage="url('Images/02d.jpg')";
        //     else
        //         document.body.style.backgroundImage="url('Images/02n.jpg')";

        // }
        // else{
        //     document.body.style.backgroundImage="url('Images/default.jpg')";
        // }
    // },

//     search:function(){
//         this.fetchWeather(document.querySelector(".cityInput").value);
//     }
// };
  
  