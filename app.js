
const http = require("http");
const fs = require("fs");

var requests = require("requests");

const homeFile = fs.readFileSync("index.html","utf-8");
const url = "https://api.openweathermap.org/data/2.5/weather?q=Jamshedpur&appid=b01213d3fbde5e7bf70e0862968cee7a&units=metric"

const server = http.createServer((req, res)=>{
    if(req.url =="/")
    {
        requests("url")
        .on("data",(chunk) =>{
            console.log(chunk);
        })
        .on("end", (err)=>{
            if(err) return console.log("connection closed due to errors", err);
    
            console.log("end");
        })
    }
})

// const replaceVal=(tempVal, orgVal) =>{
//     let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
//     return temperature;
// }


// app.get("/", function(req, res){

    
    
//     https.get(url, function(response){
//         // console.log(response);

//         response.on("data", function(data){
//             const weatherData = JSON.parse(data)
//             const temp = weatherData.main.temp;
//             const weatherDiscription = weatherData.weather[0].description;
//             const icon = weatherData.weather[0].icon;
//             const city = weatherData.name;
//             const imageURL = "http://openweathermap.org/img/wn/"+ icon + "@2x.png";

//             const arrData = [weatherData];
//             const realTimeData = arrData.map((val) =>{
//                 replaceVal(homeFile,val);
//             })
//             // res.setHeader("Content-Type", "text/html");
//             // res.write("<h3> City: " + city +"</h3>");
//             // res.write("<h4> Temperature: "+ temp +" degree Celsius"+"</h4>");
//             // res.write("<h4> Weather is currently: " + weatherDiscription + "</h4>");
//             // res.write("<img src ="+ imageURL +">")
//             // console.log(city);
//             // console.log(temp);
//             // console.log(weatherDiscription);
//             // homeFile.replace("{%tempval%}", temp);
//             // document.querySelector(".temp").innerHTML=temp+"°C";
//             console.log(temp);
//             res.write(realTimeData)
//             res.send()
//         })
//     })
    
// })

// homeFile.querySelector(".temp").innerHTML=temp+"°C";

server.listen(3000, "127.0.0.1");