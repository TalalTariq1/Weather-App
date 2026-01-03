
const api="d4e08484e552dd1b6512cf78f4002578";
let pic=document.getElementById("pic");

async function get_weather(){
    const city=document.getElementById("enter").value;
    if(!city){
        alert("Please Enter a city");
        return;
    }

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;

    try{
        let x= await fetch(url);
        let data=await x.json();
        console.log(data);




        if(data.weather[0].main==="Clouds"){
               pic.src="clouds.png";
        }
        else if(data.weather[0].main==="Clear"){
               pic.src="clear.png";
        }
        else if(data.weather[0].main==="Rain"){
               pic.src="rain.png";
        }

        else if(data.weather[0].main==="Drizzle"){
               pic.src="drizzle.png";
        }


        else if(data.weather[0].main==="Mist"){
               pic.src="mist.png";
        }



        document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+" %";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";

    document.querySelector(".weather").style.display="block";

    }catch(error){
        alert("Invalid city entered");
        document.querySelector(".weather").style.display="none";
    }




    
}

let c=document.getElementById("btn");
c.addEventListener("click",()=>{
    get_weather();
})

